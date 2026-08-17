// DSA Module 4: Dijkstra, TopSort & Union-Find (Linked-List-style tutorial)
export const advancedGraphsTopic = {
  title: 'Dijkstra, TopSort & Union-Find',
  subtitle: 'Shortest paths, DAG ordering, and connected components — three graph pillars',
  sections: [
    {
      heading: 'What Are Advanced Graph Algorithms?',
      text: 'Beyond BFS/DFS, interviews expect three power tools: <strong>Dijkstra</strong> for weighted shortest paths, <strong>topological sort</strong> for ordering tasks with prerequisites, and <strong>Union-Find (DSU)</strong> for dynamic connectivity. Master when to reach for each and you cover a huge fraction of medium/hard graph questions.',
      list: [
        '<strong>Dijkstra:</strong> Non-negative edge weights → single-source shortest paths.',
        '<strong>Topological sort:</strong> Directed acyclic graphs → linear order respecting edges u→v (u before v).',
        '<strong>Union-Find:</strong> Maintain disjoint sets under Union and Find — cycle detection in undirected graphs, Kruskal MST, accounts merging.',
        '<strong>Prerequisites:</strong> Adjacency lists, BFS vs DFS intuition, min-heaps for Dijkstra.',
        '<strong>Failure modes:</strong> Dijkstra fails on negative edges; TopSort fails if a cycle exists; Union-Find needs path compression + union by rank for speed.'
      ]
    },
    {
      heading: 'Components Shared by Graph Algorithms',
      list: [
        '<strong>Vertices (nodes):</strong> Entities — cities, courses, network hosts, people.',
        '<strong>Edges:</strong> Directed or undirected, unweighted or weighted.',
        '<strong>Adjacency list:</strong> Map node → list of (neighbor, weight) — sparse-graph default.',
        '<strong>State arrays:</strong> dist[], visited[], indegree[], parent[] — algorithm-specific bookkeeping.',
        '<strong>Worklist:</strong> Priority queue (Dijkstra), queue (Kahn TopSort), or recursive stack (DFS TopSort).'
      ]
    },
    // ── Dijkstra ──
    {
      heading: 'What is Dijkstra\'s Algorithm?',
      text: 'Dijkstra finds the shortest path from a source to every other node when <strong>all edge weights are ≥ 0</strong>. It always expands the unsettled node with the smallest tentative distance — a greedy choice that is safe precisely because weights are non-negative.',
      list: [
        '<strong>dist[v]:</strong> Best known distance from source to v; start with 0 at source and ∞ elsewhere.',
        '<strong>Min-heap:</strong> Pops the closest unsettled node in O(log V).',
        '<strong>Relaxation:</strong> For edge u→v with weight w, if dist[u]+w &lt; dist[v], update dist[v] and push (dist[v], v).',
        '<strong>Not BFS:</strong> BFS is shortest only for unit weights; Dijkstra generalizes to positive weights.',
        '<strong>Negative edges:</strong> Use Bellman-Ford instead — Dijkstra can return wrong answers.'
      ]
    },
    {
      heading: 'Dijkstra Walkthrough',
      diagram: {
        caption: 'Source A; edges with weights — settle closest node each time',
        chart: `flowchart LR
    A["A dist0"] -->|2| B["B"]
    A -->|5| C["C"]
    B -->|1| C
    B -->|3| D["D"]
    C -->|1| D
    style A fill:#2ecc71,color:#fff`
      }
    },
    {
      text: '<strong>Trace:</strong> Start dist A=0. Pop A; relax B→2, C→5. Pop B (2); relax C→min(5,2+1)=3, D→5. Pop C (3); relax D→min(5,3+1)=4. Pop D (4). Final: A0 B2 C3 D4.'
    },
    {
      heading: 'Dijkstra Operations',
      text: 'Treat each step as an operation you can implement and test alone.'
    },
    {
      heading: 'Operation: Build Weighted Adjacency List',
      text: 'Store outgoing edges as (neighbor, weight) pairs. Undirected graphs add both directions.',
      code: `from collections import defaultdict
graph = defaultdict(list)
for u, v, w in edges:
    graph[u].append((v, w))
    graph[v].append((u, w))  # if undirected`,
      language: 'python'
    },
    {
      heading: 'Operation: Relax Edges from u',
      text: 'For each neighbor v, improve dist[v] when dist[u] + w is better; push the improved pair onto the heap. Multiple heap entries for the same node are OK — skip stale ones when popping if d &gt; dist[node].'
    },
    {
      heading: 'Operation: Extract Answer',
      text: 'After the loop, dist[t] is the shortest path length to t (or ∞ / -1 if unreachable). Reconstruct path via parent[] if required.'
    },
    // ── TopSort ──
    {
      heading: 'What is Topological Sort?',
      text: 'A topological order of a directed graph is a linear ordering of vertices such that for every edge u→v, u appears before v. It exists <strong>if and only if</strong> the graph is a DAG (directed acyclic graph). Classic uses: course schedules, build systems, spreadsheet formula evaluation.',
      list: [
        '<strong>Kahn\'s algorithm:</strong> BFS using indegrees — repeatedly take nodes with indegree 0.',
        '<strong>DFS algorithm:</strong> Finish times — append node after exploring all descendants, then reverse.',
        '<strong>Cycle detection:</strong> If Kahn processes fewer than V nodes, a cycle exists.',
        '<strong>Not unique:</strong> Many valid orders may exist; any one is usually enough unless the problem asks for lexicographically smallest.'
      ]
    },
    {
      heading: 'Kahn TopSort Walkthrough',
      diagram: {
        caption: 'Edges: 0→1, 0→2, 1→3, 2→3 — order starts with 0',
        chart: `flowchart LR
    N0["0 indeg0"] --> N1["1"]
    N0 --> N2["2"]
    N1 --> N3["3"]
    N2 --> N3
    style N0 fill:#2ecc71,color:#fff
    style N3 fill:#3498db,color:#fff`
      }
    },
    {
      text: 'Queue starts with [0]. Emit 0; decrement indegree of 1 and 2 → both 0 → enqueue. Emit 1 then 2 (order among them flexible); both decrement 3. Emit 3. Order example: 0,1,2,3.'
    },
    {
      heading: 'TopSort Operations',
      list: [
        '<strong>Compute indegrees:</strong> One pass over edges; indegree[v]++ for each u→v.',
        '<strong>Seed queue:</strong> All nodes with indegree 0 (sources).',
        '<strong>Process:</strong> Pop u, append to order; for each neighbor, indegree-- and enqueue if 0.',
        '<strong>Validate:</strong> len(order) == V, else cycle → return empty / error.'
      ]
    },
    // ── Union-Find ──
    {
      heading: 'What is Union-Find (DSU)?',
      text: 'Disjoint Set Union maintains a partition of elements into disjoint sets. <strong>Find(x)</strong> returns the representative (root) of x\'s set. <strong>Union(x,y)</strong> merges the sets containing x and y. With path compression and union by rank/size, both operations are effectively amortized O(α(n)) — inverse Ackermann, practically constant.',
      list: [
        '<strong>Parent array:</strong> parent[i] points toward the root; root has parent[i]=i.',
        '<strong>Path compression:</strong> On Find, point every node on the path directly to the root.',
        '<strong>Union by rank/size:</strong> Attach the smaller tree under the larger to keep trees shallow.',
        '<strong>Use cases:</strong> Detect undirected cycles, Kruskal MST, number of provinces, accounts merge, redundant connection.'
      ]
    },
    {
      heading: 'Union-Find Visualization',
      diagram: {
        caption: 'Union(1,2), Union(3,4), Union(2,3) → one component',
        chart: `flowchart TB
    subgraph Before["After first two unions"]
      R1["root1"] --> A1["1"]
      R1 --> A2["2"]
      R3["root3"] --> A3["3"]
      R3 --> A4["4"]
    end
    subgraph After["After Union(2,3)"]
      R["root"] --> B1["1"]
      R --> B2["2"]
      R --> B3["3"]
      R --> B4["4"]
    end
    Before ~~~ After
    style R fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'Advantages of These Algorithms',
      list: [
        '<strong>Dijkstra:</strong> Optimal for non-negative weighted shortest paths; binary heap O((V+E) log V).',
        '<strong>TopSort:</strong> Linear O(V+E); simultaneously detects cycles in directed graphs.',
        '<strong>Union-Find:</strong> Near O(1) connectivity queries online as edges arrive.',
        '<strong>Composable:</strong> Kruskal = sort edges + Union-Find; course schedule = TopSort; network delay = Dijkstra.'
      ]
    },
    {
      heading: 'Disadvantages & Pitfalls',
      list: [
        '<strong>Dijkstra + negatives:</strong> Incorrect — use Bellman-Ford / SPFA carefully.',
        '<strong>Dense graphs:</strong> Fibonacci heap theory rarely helps; practical binary heap is standard.',
        '<strong>TopSort on cyclic graphs:</strong> Must handle "impossible" explicitly.',
        '<strong>Union-Find without optimizations:</strong> Degenerates to O(n) chains.',
        '<strong>1-index vs 0-index:</strong> Off-by-one on node labels is a common WA source.'
      ]
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'Dijkstra, Kahn TopSort & Union-Find',
        code: `import heapq
from collections import defaultdict, deque
from typing import List, Dict, Tuple

def dijkstra(n: int, edges: List[Tuple[int, int, int]], src: int) -> List[float]:
    graph = defaultdict(list)
    for u, v, w in edges:
        graph[u].append((v, w))
    dist = [float('inf')] * n
    dist[src] = 0
    heap = [(0, src)]
    while heap:
        d, u = heapq.heappop(heap)
        if d > dist[u]:
            continue
        for v, w in graph[u]:
            nd = d + w
            if nd < dist[v]:
                dist[v] = nd
                heapq.heappush(heap, (nd, v))
    return dist

def topo_sort(n: int, edges: List[Tuple[int, int]]) -> List[int]:
    graph = defaultdict(list)
    indeg = [0] * n
    for u, v in edges:
        graph[u].append(v)
        indeg[v] += 1
    q = deque([i for i in range(n) if indeg[i] == 0])
    order = []
    while q:
        u = q.popleft()
        order.append(u)
        for v in graph[u]:
            indeg[v] -= 1
            if indeg[v] == 0:
                q.append(v)
    return order if len(order) == n else []  # empty ⇒ cycle

class UnionFind:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.components = n

    def find(self, x: int) -> int:
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]  # path compression
            x = self.parent[x]
        return x

    def union(self, a: int, b: int) -> bool:
        ra, rb = self.find(a), self.find(b)
        if ra == rb:
            return False  # already connected — cycle if used on undirected edge
        if self.rank[ra] < self.rank[rb]:
            ra, rb = rb, ra
        self.parent[rb] = ra
        if self.rank[ra] == self.rank[rb]:
            self.rank[ra] += 1
        self.components -= 1
        return True

# Demo
print(dijkstra(4, [(0,1,2),(0,2,5),(1,2,1),(1,3,3),(2,3,1)], 0))
print(topo_sort(4, [(0,1),(0,2),(1,3),(2,3)]))
uf = UnionFind(5)
uf.union(0, 1); uf.union(1, 2); uf.union(3, 4)
print(uf.components, uf.find(0) == uf.find(2))`,
        output: `[0, 2, 3, 4]
[0, 1, 2, 3]
2 True`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'Dijkstra, Kahn & Union-Find in Java',
        code: `import java.util.*;

public class GraphAlgos {
    static int[] dijkstra(int n, int[][] edges, int src) {
        List<int[]>[] g = new ArrayList[n];
        for (int i = 0; i < n; i++) g[i] = new ArrayList<>();
        for (int[] e : edges) g[e[0]].add(new int[]{e[1], e[2]});
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE / 4);
        dist[src] = 0;
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        pq.offer(new int[]{0, src});
        while (!pq.isEmpty()) {
            int[] cur = pq.poll();
            int d = cur[0], u = cur[1];
            if (d > dist[u]) continue;
            for (int[] e : g[u]) {
                int v = e[0], w = e[1];
                if (d + w < dist[v]) {
                    dist[v] = d + w;
                    pq.offer(new int[]{dist[v], v});
                }
            }
        }
        return dist;
    }

    static List<Integer> topoSort(int n, int[][] edges) {
        List<Integer>[] g = new ArrayList[n];
        int[] indeg = new int[n];
        for (int i = 0; i < n; i++) g[i] = new ArrayList<>();
        for (int[] e : edges) { g[e[0]].add(e[1]); indeg[e[1]]++; }
        Queue<Integer> q = new ArrayDeque<>();
        for (int i = 0; i < n; i++) if (indeg[i] == 0) q.offer(i);
        List<Integer> order = new ArrayList<>();
        while (!q.isEmpty()) {
            int u = q.poll(); order.add(u);
            for (int v : g[u]) if (--indeg[v] == 0) q.offer(v);
        }
        return order.size() == n ? order : List.of();
    }

    static class UF {
        int[] p, r; int comp;
        UF(int n) { p = new int[n]; r = new int[n]; comp = n;
            for (int i = 0; i < n; i++) p[i] = i; }
        int find(int x) {
            if (p[x] != x) p[x] = find(p[x]);
            return p[x];
        }
        boolean union(int a, int b) {
            int ra = find(a), rb = find(b);
            if (ra == rb) return false;
            if (r[ra] < r[rb]) { int t = ra; ra = rb; rb = t; }
            p[rb] = ra; if (r[ra] == r[rb]) r[ra]++; comp--; return true;
        }
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(
            dijkstra(4, new int[][]{{0,1,2},{0,2,5},{1,2,1},{1,3,3},{2,3,1}}, 0)));
        System.out.println(topoSort(4, new int[][]{{0,1},{0,2},{1,3},{2,3}}));
        UF uf = new UF(5); uf.union(0,1); uf.union(1,2); uf.union(3,4);
        System.out.println(uf.comp + " " + (uf.find(0) == uf.find(2)));
    }
}`,
        output: `[0, 2, 3, 4]
[0, 1, 2, 3]
2 true`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Time & Space Complexity',
      table: {
        headers: ['Algorithm', 'Time', 'Space', 'Notes'],
        rows: [
          ['Dijkstra (binary heap)', 'O((V+E) log V)', 'O(V+E)', 'Non-negative weights only'],
          ['Dijkstra (array scan)', 'O(V²)', 'O(V+E)', 'Dense graphs / small V'],
          ['Bellman-Ford', 'O(V·E)', 'O(V)', 'Handles negatives; detects neg cycles'],
          ['Kahn TopSort', 'O(V+E)', 'O(V+E)', 'Empty order ⇒ cycle'],
          ['DFS TopSort', 'O(V+E)', 'O(V+E)', 'Post-order then reverse'],
          ['Union-Find α', '≈ O(1) amort.', 'O(V)', 'Path compression + rank'],
          ['Kruskal MST', 'O(E log E)', 'O(V)', 'Sort edges + DSU']
        ]
      },
      note: 'Interview tip: say why Dijkstra is safe (non-negative → first time a node is settled, dist is final). That one sentence separates memorization from understanding.'
    },
    {
      heading: 'Common Mistakes & Pitfalls',
      list: [
        '<strong>Using Dijkstra with negative weights</strong> — silently wrong answers.',
        '<strong>Not skipping stale heap entries</strong> — still correct if you check d &gt; dist[u], but infinite loops if you mark visited too early with decrease-key alternatives.',
        '<strong>Forgetting bidirectional edges</strong> on undirected inputs.',
        '<strong>TopSort: not checking len(order)==n</strong> — miss cycle detection.',
        '<strong>Union-Find: union without find</strong> — must union roots, not raw ids.',
        '<strong>1-based problems with 0-based arrays</strong> — classic off-by-one.'
      ],
      code: `# WRONG — mark visited when pushing (can miss shorter path with binary heap)
visited.add(v); heapq.heappush(heap, (nd, v))

# CORRECT — allow multiple entries; skip when popping if stale
if d > dist[u]:
    continue

# WRONG Union-Find
parent[a] = b  # may not attach roots
# CORRECT
parent[find(a)] = find(b)`,
      language: 'python'
    },
    {
      heading: 'Real-World Applications',
      list: [
        '<strong>Navigation / maps:</strong> Dijkstra and A* power driving directions (non-negative travel times).',
        '<strong>Network routing:</strong> OSPF-like shortest path ideas; latency-weighted graphs.',
        '<strong>Build systems (Make, Bazel):</strong> Topological order of compilation units.',
        '<strong>Course / curriculum planners:</strong> Prerequisite graphs → TopSort; cycle = impossible plan.',
        '<strong>Social networks / clustering:</strong> Union-Find merges communities as edges arrive.',
        '<strong>Image segmentation / Kruskal:</strong> MST-based clustering uses DSU under the hood.',
        '<strong>Game pathfinding:</strong> Grid graphs with terrain costs → Dijkstra / A*.'
      ]
    },
    {
      heading: 'Top Interview Questions',
      text: 'Eight problems that force you to pick the right tool among Dijkstra, TopSort, and Union-Find.',
      note: 'Pattern: weighted shortest → Dijkstra; prerequisites / order → TopSort; connectivity / cycle undirected / components → Union-Find (or BFS/DFS).'
    },
    {
      heading: 'Practice Question 1: Network Delay Time (LeetCode 743, Medium)',
      text: '<strong>Problem:</strong> Weighted directed graph; time for signal from k to reach all nodes.<br/><strong>Key idea:</strong> Dijkstra from k; answer is max dist if all finite else -1.<br/><strong>Complexity:</strong> O((V+E) log V).',
      example: {
        title: 'Python Solution',
        code: `import heapq
from collections import defaultdict
def networkDelayTime(times, n, k):
    g = defaultdict(list)
    for u, v, w in times: g[u].append((v, w))
    dist = {i: float('inf') for i in range(1, n + 1)}
    dist[k] = 0
    h = [(0, k)]
    while h:
        d, u = heapq.heappop(h)
        if d > dist[u]: continue
        for v, w in g[u]:
            if d + w < dist[v]:
                dist[v] = d + w
                heapq.heappush(h, (dist[v], v))
    ans = max(dist.values())
    return -1 if ans == float('inf') else ans`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Course Schedule (LeetCode 207, Medium)',
      text: '<strong>Problem:</strong> Can you finish all courses given prerequisites?<br/><strong>Key idea:</strong> TopSort / cycle detect on directed graph; Kahn count == n.<br/><strong>Complexity:</strong> O(V+E).',
      example: {
        title: 'Python Solution',
        code: `from collections import deque, defaultdict
def canFinish(numCourses, prerequisites):
    g = defaultdict(list)
    indeg = [0] * numCourses
    for a, b in prerequisites:
        g[b].append(a); indeg[a] += 1
    q = deque([i for i in range(numCourses) if indeg[i] == 0])
    seen = 0
    while q:
        u = q.popleft(); seen += 1
        for v in g[u]:
            indeg[v] -= 1
            if indeg[v] == 0: q.append(v)
    return seen == numCourses`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 3: Course Schedule II (LeetCode 210, Medium)',
      text: '<strong>Problem:</strong> Return a valid course order (any topological order).<br/><strong>Key idea:</strong> Same Kahn as Q2 but record the order list.<br/><strong>Complexity:</strong> O(V+E).',
      example: {
        title: 'Python Solution',
        code: `from collections import deque, defaultdict
def findOrder(n, prerequisites):
    g = defaultdict(list)
    indeg = [0] * n
    for a, b in prerequisites:
        g[b].append(a); indeg[a] += 1
    q = deque([i for i in range(n) if indeg[i] == 0])
    order = []
    while q:
        u = q.popleft(); order.append(u)
        for v in g[u]:
            indeg[v] -= 1
            if indeg[v] == 0: q.append(v)
    return order if len(order) == n else []`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 4: Number of Provinces (LeetCode 547, Medium)',
      text: '<strong>Problem:</strong> Connected components in undirected adjacency matrix.<br/><strong>Key idea:</strong> Union all connected pairs; answer = components count.<br/><strong>Complexity:</strong> O(n² α(n)).',
      example: {
        title: 'Python Solution',
        code: `def findCircleNum(isConnected):
    n = len(isConnected)
    p = list(range(n))
    def find(x):
        while p[x] != x:
            p[x] = p[p[x]]; x = p[x]
        return x
    def union(a, b):
        ra, rb = find(a), find(b)
        if ra != rb: p[rb] = ra
    for i in range(n):
        for j in range(i + 1, n):
            if isConnected[i][j]:
                union(i, j)
    return len({find(i) for i in range(n)})`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 5: Redundant Connection (LeetCode 684, Medium)',
      text: '<strong>Problem:</strong> Undirected graph with one extra edge forming a cycle; return that edge.<br/><strong>Key idea:</strong> Union edges in order; first edge whose ends share a root is redundant.<br/><strong>Complexity:</strong> O(n α(n)).',
      example: {
        title: 'Python Solution',
        code: `def findRedundantConnection(edges):
    p = list(range(len(edges) + 1))
    def find(x):
        while p[x] != x:
            p[x] = p[p[x]]; x = p[x]
        return x
    for u, v in edges:
        ru, rv = find(u), find(v)
        if ru == rv: return [u, v]
        p[rv] = ru
    return []`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 6: Cheapest Flights Within K Stops (LeetCode 787, Medium)',
      text: '<strong>Problem:</strong> Cheapest price from src to dst with at most k stops.<br/><strong>Key idea:</strong> Bellman-Ford style relax for k+1 rounds (or Dijkstra with state (city, stops)). Negative not present but hop limit breaks plain Dijkstra state.<br/><strong>Complexity:</strong> O(k · E) Bellman-style.',
      example: {
        title: 'Python Solution',
        code: `def findCheapestPrice(n, flights, src, dst, k):
    dist = [float('inf')] * n
    dist[src] = 0
    for _ in range(k + 1):
        nd = dist[:]
        for u, v, w in flights:
            if dist[u] + w < nd[v]:
                nd[v] = dist[u] + w
        dist = nd
    return -1 if dist[dst] == float('inf') else dist[dst]`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 7: Min Cost to Connect All Points (LeetCode 1584, Medium)',
      text: '<strong>Problem:</strong> MST on complete graph of points with Manhattan distance.<br/><strong>Key idea:</strong> Kruskal: all pairs as edges, sort, Union-Find until n-1 unions; or Prim.<br/><strong>Complexity:</strong> O(n² log n) Kruskal on dense edges.',
      example: {
        title: 'Python Solution',
        code: `def minCostConnectPoints(points):
    n = len(points)
    edges = []
    for i in range(n):
        for j in range(i + 1, n):
            d = abs(points[i][0]-points[j][0]) + abs(points[i][1]-points[j][1])
            edges.append((d, i, j))
    edges.sort()
    p = list(range(n))
    def find(x):
        while p[x] != x:
            p[x] = p[p[x]]; x = p[x]
        return x
    cost = used = 0
    for d, u, v in edges:
        ru, rv = find(u), find(v)
        if ru == rv: continue
        p[rv] = ru; cost += d; used += 1
        if used == n - 1: break
    return cost`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 8: Path With Minimum Effort (LeetCode 1631, Medium)',
      text: '<strong>Problem:</strong> Path minimizing the max absolute height difference of consecutive cells.<br/><strong>Key idea:</strong> Dijkstra where "distance" is the max edge effort along the path (not sum).<br/><strong>Complexity:</strong> O(mn log(mn)).',
      example: {
        title: 'Python Solution',
        code: `import heapq
def minimumEffortPath(heights):
    m, n = len(heights), len(heights[0])
    dist = [[float('inf')] * n for _ in range(m)]
    dist[0][0] = 0
    h = [(0, 0, 0)]
    while h:
        d, r, c = heapq.heappop(h)
        if (r, c) == (m - 1, n - 1): return d
        if d > dist[r][c]: continue
        for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
            nr, nc = r + dr, c + dc
            if 0 <= nr < m and 0 <= nc < n:
                nd = max(d, abs(heights[nr][nc] - heights[r][c]))
                if nd < dist[nr][nc]:
                    dist[nr][nc] = nd
                    heapq.heappush(h, (nd, nr, nc))
    return 0`,
        language: 'python',
        type: 'code'
      }
    }
  ]
};
