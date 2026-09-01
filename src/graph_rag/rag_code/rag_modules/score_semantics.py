"""统一不同向量后端的分数方向。"""


DISTANCE_METRICS = {
    "L2",
    "EUCLIDEAN",
    "ANGULAR",
    "MANHATTAN",
    "HAMMING",
}


def faiss_metric_for_index(index_type: str) -> str:
    """返回本项目对应 FAISS 索引构造器实际使用的度量。"""
    index = str(index_type).strip().upper()
    return "L2" if index in {"IVF", "HNSW"} else "IP"


def to_relevance_score(raw_score: float, metric_type: str) -> float:
    """转换为“值越大越相关”的分数，同时保留原始分数供调用方调试。"""
    score = float(raw_score)
    metric = str(metric_type).strip().upper()

    if metric in DISTANCE_METRICS:
        return 1.0 / (1.0 + max(0.0, score))

    return score
