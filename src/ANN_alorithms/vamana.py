import random

import numpy as np

__all__ = ["SimpleVamana"]


class SimpleVamana:
    def __init__(self, R=8, L_build=24, alpha=1.2, L_search=24, seed=7):
        if R < 1 or L_build < 1 or L_search < 1:
            raise ValueError("R、L_build 和 L_search 必须为正数")
        if alpha < 1:
            raise ValueError("alpha 必须大于或等于 1")
        self.R = int(R)
        self.L_build = int(L_build)
        self.alpha = float(alpha)
        self.L_search = int(L_search)
        self.rng = random.Random(seed)
        self.graph = []
        self.entry = None
        self.X = None

    def distance(self, a, b):
        """欧氏距离。"""
        return float(np.linalg.norm(a - b))

    def _distance_to_query(self, q):
        return np.linalg.norm(self.X - q, axis=1)

    def robust_prune(self, p, candidates, alpha=None, limit=None):
        """合并已有出邻居，并按 alpha * d(p*, p') <= d(p, p') 裁剪。"""
        if self.X is None:
            raise RuntimeError("请先设置数据")
        p = int(p)
        alpha = self.alpha if alpha is None else float(alpha)
        limit = self.R if limit is None else int(limit)
        if alpha < 1 or limit < 1:
            raise ValueError("alpha 必须大于或等于 1，limit 必须为正数")
        pool = {int(x) for x in set(candidates) | set(self.graph[p]) if int(x) != p}
        selected = []
        while pool and len(selected) < limit:
            # 先取离 p 最近的候选 p*。
            p_star = min(pool, key=lambda x: self.distance(self.X[p], self.X[x]))
            pool.remove(p_star)
            selected.append(p_star)
            # 满足不等式的候选被 p_star 遮蔽；其余候选继续参与筛选。
            pool = {
                x
                for x in pool
                if alpha * self.distance(self.X[p_star], self.X[x])
                > self.distance(self.X[p], self.X[x])
            }
        return selected

    def greedy_search(self, q, entry=None, L=None):
        """返回当前搜索列表、实际展开集合和展开顺序。"""
        if self.X is None or not self.graph:
            raise RuntimeError("请先调用 fit")
        q = np.asarray(q, dtype=float)
        entry = self.entry if entry is None else int(entry)
        L = self.L_search if L is None else int(L)
        if L < 1 or not 0 <= entry < len(self.X):
            raise ValueError("entry 必须有效，L 必须为正数")
        distances = self._distance_to_query(q)
        # search_list 是当前最好候选，已展开和未展开节点共同占用 L 个位置。
        search_list = {entry: float(distances[entry])}
        expanded = set()
        expansion_order = []
        while search_list:
            unexpanded = [node for node in search_list if node not in expanded]
            if not unexpanded:
                break
            node = min(unexpanded, key=lambda i: search_list[i])
            expanded.add(node)
            expansion_order.append(node)
            for nb in self.graph[node]:
                search_list[nb] = float(distances[nb])
            # 截断发生在合并已展开/未展开节点之后；未展开节点若以后再次
            # 从其他邻居被发现，仍可重新进入列表，这与集合并集语义一致。
            best = sorted(search_list, key=lambda i: search_list[i])[:L]
            search_list = {i: search_list[i] for i in best}
        ranked = sorted(search_list, key=lambda i: search_list[i])[:L]
        return ranked, expanded, expansion_order

    def _initial_graph(self):
        """为每个节点随机连接至多 R 个其他节点。"""
        graph = []
        for i in range(len(self.X)):
            choices = [j for j in range(len(self.X)) if j != i]
            self.rng.shuffle(choices)
            graph.append(choices[: min(self.R, len(choices))])
        return graph

    def fit(self, X):
        self.X = np.asarray(X, dtype=float)
        if self.X.ndim != 2 or len(self.X) < 2:
            raise ValueError("X 必须是至少包含两个点的二维数组")
        # 小数据上直接计算所有两两距离，以精确选择 medoid。
        all_dist = np.linalg.norm(
            self.X[:, None, :] - self.X[None, :, :], axis=2
        )
        self.entry = int(np.argmin(all_dist.sum(axis=1)))
        self.graph = self._initial_graph()

        # 教学简化：随机有限度初始图 + 随机顺序的一轮裁剪和补反向边。
        order = list(range(len(self.X)))
        self.rng.shuffle(order)
        for p in order:
            _, visited, _ = self.greedy_search(self.X[p], self.entry, self.L_build)
            self.graph[p] = self.robust_prune(
                p, set(self.graph[p]) | set(visited), self.alpha, self.R
            )
            # 只为鲁棒裁剪后真正保留的 p -> nb 补反向边。
            for nb in list(self.graph[p]):
                if p not in self.graph[nb]:
                    self.graph[nb].append(p)
                if len(self.graph[nb]) > self.R:
                    self.graph[nb] = self.robust_prune(nb, self.graph[nb])

        if any(len(neighbors) > self.R for neighbors in self.graph):
            raise RuntimeError("建图违反最大出度限制")
        return self

    def search(self, q, k=5, L_search=None):
        if self.X is None:
            raise RuntimeError("请先调用 fit")
        if k < 1:
            raise ValueError("k 必须为正数")
        if k > len(self.X):
            raise ValueError("k 不能大于数据点数量")
        effective_L = self.L_search if L_search is None else int(L_search)
        if effective_L < k:
            raise ValueError("L_search 必须不小于 k")
        q = np.asarray(q, dtype=float)
        if q.shape != (self.X.shape[1],):
            raise ValueError("查询向量维度必须与数据一致")
        ranked, expanded, expansion_order = self.greedy_search(
            q, self.entry, effective_L
        )
        if len(ranked) < k:
            raise ValueError("从入口可达的节点不足 k 个")
        return ranked[:k], {
            "expanded": expanded,
            "expansion_order": expansion_order,
        }
