import importlib.util
import sys
import types
import unittest
from pathlib import Path
from types import SimpleNamespace

RAG_CODE_DIR = Path(__file__).resolve().parents[1]
MODULES_DIR = RAG_CODE_DIR / "rag_modules"


def load_module(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    module = importlib.util.module_from_spec(spec)
    sys.modules[name] = module
    spec.loader.exec_module(module)
    return module


class VectorScoreSemanticsTest(unittest.TestCase):
    def test_similarity_metrics_keep_higher_scores_more_relevant(self):
        score_semantics = load_module(
            "score_semantics",
            MODULES_DIR / "score_semantics.py",
        )

        self.assertEqual(score_semantics.to_relevance_score(0.9, "IP"), 0.9)
        self.assertEqual(score_semantics.to_relevance_score(0.8, "COSINE"), 0.8)

    def test_faiss_metric_matches_constructed_index_type(self):
        score_semantics = load_module(
            "score_semantics",
            MODULES_DIR / "score_semantics.py",
        )

        self.assertEqual(score_semantics.faiss_metric_for_index("Flat"), "IP")
        self.assertEqual(score_semantics.faiss_metric_for_index("IVF"), "IP")
        self.assertEqual(score_semantics.faiss_metric_for_index("HNSW"), "L2")

    def test_distance_metrics_map_lower_scores_to_higher_relevance(self):
        score_semantics = load_module(
            "score_semantics",
            MODULES_DIR / "score_semantics.py",
        )

        self.assertGreater(
            score_semantics.to_relevance_score(0.1, "L2"),
            score_semantics.to_relevance_score(0.9, "L2"),
        )
        self.assertGreater(
            score_semantics.to_relevance_score(0.1, "angular"),
            score_semantics.to_relevance_score(0.9, "angular"),
        )
        for metric in ("euclidean", "manhattan", "hamming"):
            with self.subTest(metric=metric):
                self.assertGreater(
                    score_semantics.to_relevance_score(0.1, metric),
                    score_semantics.to_relevance_score(0.9, metric),
                )

    def test_hybrid_search_preserves_backend_relevance_score(self):
        package = types.ModuleType("isolated")
        package.__path__ = []
        sys.modules["isolated"] = package
        graph_indexing = types.ModuleType("isolated.graph_indexing")
        graph_indexing.GraphIndexingModule = object
        sys.modules["isolated.graph_indexing"] = graph_indexing
        hybrid_module = load_module(
            "isolated.hybrid_retrieval",
            MODULES_DIR / "hybrid_retrieval.py",
        )

        retrieval = hybrid_module.HybridRetrievalModule.__new__(
            hybrid_module.HybridRetrievalModule
        )
        retrieval.config = SimpleNamespace(vector_db="faiss")
        retrieval.dual_level_retrieval = lambda query, top_k: []
        retrieval._get_node_neighbors = lambda node_id: []
        retrieval.vector_db_module = SimpleNamespace(
            similarity_search=lambda query, k: [
                {
                    "text": "high",
                    "score": 0.9,
                    "raw_score": 0.9,
                    "relevance_score": 0.9,
                    "metadata": {"node_id": "high"},
                },
                {
                    "text": "low",
                    "score": 0.2,
                    "raw_score": 0.2,
                    "relevance_score": 0.2,
                    "metadata": {"node_id": "low"},
                },
            ]
        )

        results = retrieval.hybrid_search("query", top_k=2)

        self.assertEqual(
            [doc.metadata["final_score"] for doc in results],
            [0.9, 0.2],
        )


if __name__ == "__main__":
    unittest.main()
