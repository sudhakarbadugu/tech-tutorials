// DSA Module 2: Graphs BFS/DFS Basics (Linked-List-style tutorial)
export const graphsBfsDfsTopic = {
  title: 'Graphs BFS/DFS Basics',
  subtitle: 'Nodes and edges — traverse with a queue (BFS) or a stack/recursion (DFS)',
  sections: [
    {
      heading: 'What is a Graph?',
      text: 'A graph is a set of <strong>vertices (nodes)</strong> connected by <strong>edges</strong>. Edges may be directed or undirected, weighted or unweighted. Graphs model social networks, maps, dependency systems, and state spaces. BFS and DFS are the two fundamental ways to visit every reachable node systematically.',
      list: [
        '<strong>Vertex / node:</strong> An entity — city, user, course, grid cell.',
        '<strong>Edge:</strong> A connection u–v (undirected) or u→v (directed).',
        '<strong>Adjacent / neighbor:</strong> Nodes sharing an edge with u.',
        '<strong>Path / cycle:</strong> Sequence of edges; cycle returns to a start vertex.',
        '<strong>Connected component:</strong> Maximal set of mutually reachable nodes (undirected).'
      ]
    },
    {
      heading: 'Components of a Graph Representation',
      list: [
        '<strong>Adjacency list:</strong> Map node → list of neighbors. Default for sparse graphs (E ≪ V²). Space O(V+E).',
        '<strong>Adjacency matrix:</strong> V×V boolean/weight grid. O(1) edge query; space O(V²). Good when dense.',
        '<strong>Edge list:</strong> List of (u,v,w) triples — simple input format; convert to lists for BFS/DFS.',
        '<strong>Visited set/array:</strong> Marks nodes already expanded so you do not loop forever on cycles.',
        '<strong>Parent / dist arrays:</strong> Optional bookkeeping to reconstruct paths and levels.'
      ]
    },
    {
      heading: 'Adjacency List Visualization',
      diagram: {
        caption: 'Undirected graph as adjacency lists',
        chart: `flowchart LR
    subgraph G[Graph]
      A["0"] --- B["1"]
      A --- C["2"]
      B --- C
      B --- D["3"]
    end
    style A fill:#9b59b6,color:#fff`
      }
    },
    {
      text: 'Lists: 0:[1,2], 1:[0,2,3], 2:[0,1], 3:[1]. Building from edge list is one loop of appends both ways for undirected graphs.'
    },
    {
      heading: 'What is BFS?',
      text: '<strong>Breadth-First Search</strong> expands nodes in order of distance from the source — level by level — using a <strong>queue</strong>. On unweighted graphs, the first time you reach a node is via a shortest path (fewest edges).',
      list: [
        '<strong>Queue:</strong> FIFO worklist of nodes to expand.',
        '<strong>Visited when enqueue (typical):</strong> Prevents multiple queue copies of the same node.',
        '<strong>dist[v]:</strong> Edges from source; set when first discovered.',
        '<strong>Use cases:</strong> Shortest path unweighted, level order, multi-source flood fill, bipartite check.',
        '<strong>Time / space:</strong> O(V+E) time, O(V) queue + visited.'
      ]
    },
    {
      heading: 'BFS Walkthrough',
      diagram: {
        caption: 'BFS from 0 — layers by distance',
        chart: `flowchart TD
    L0["dist0: 0"] --> L1["dist1: 1, 2"]
    L1 --> L2["dist2: 3"]
    style L0 fill:#2ecc71,color:#fff
    style L2 fill:#3498db,color:#fff`
      }
    },
    {
      heading: 'What is DFS?',
      text: '<strong>Depth-First Search</strong> explores as far as possible along one branch before backtracking — implemented with <strong>recursion</strong> (call stack) or an explicit <strong>stack</strong>. DFS is ideal for path existence, cycle detection, topological ideas, connected components, and grid backtracking.',
      list: [
        '<strong>Go deep first:</strong> Visit a neighbor fully before the next sibling.',
        '<strong>Colors / states:</strong> Unvisited / visiting / done — detect back edges (cycles) in directed graphs.',
        '<strong>Not shortest path</strong> on unweighted graphs (use BFS for that).',
        '<strong>Use cases:</strong> Components, cycle detect, maze path, island count, tree DP setups.',
        '<strong>Time / space:</strong> O(V+E) time, O(V) stack worst case.'
      ]
    },
    {
      heading: 'DFS Walkthrough',
      diagram: {
        caption: 'DFS recursion dives then backtracks',
        chart: `flowchart TD
    A["visit 0"] --> B["visit 1"]
    B --> C["visit 3"]
    C --> D["backtrack to 1"]
    D --> E["visit 2"]
    style A fill:#9b59b6,color:#fff
    style C fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'BFS vs DFS',
      table: {
        headers: ['Aspect', 'BFS', 'DFS'],
        rows: [
          ['Data structure', 'Queue', 'Stack / recursion'],
          ['Order', 'By distance layers', 'By deep paths'],
          ['Shortest path (unweighted)', 'Yes', 'No (not guaranteed)'],
          ['Memory', 'O(width)', 'O(depth)'],
          ['Cycle detection', 'With parent careful', 'Color states classic'],
          ['Typical interview', 'Levels, multi-source', 'Islands, paths, components']
        ]
      }
    },
    {
      heading: 'Types of Graphs You Will See',
      list: [
        '<strong>Undirected unweighted:</strong> Social undirected friends, grid 4-direction moves.',
        '<strong>Directed:</strong> Prerequisites, URL links, one-way streets.',
        '<strong>Weighted:</strong> Needs Dijkstra / Bellman (Module 4) — BFS only if all weights equal.',
        '<strong>Implicit graphs:</strong> Nodes are states (puzzle configs); edges are moves — still BFS/DFS.',
        '<strong>Grid graphs:</strong> Cells are nodes; neighbors are up/down/left/right (and diagonals sometimes).'
      ]
    },
    {
      heading: 'Advantages of BFS/DFS',
      list: [
        '<strong>Linear time O(V+E)</strong> — optimal for "visit everything reachable".',
        '<strong>Simple templates</strong> you can write under interview pressure.',
        '<strong>BFS gives shortest paths</strong> when edges are unit cost.',
        '<strong>DFS gives natural recursive structure</strong> for path construction and backtracking.',
        '<strong>Foundation for advanced algorithms:</strong> TopSort, bridges, SCCs, Dijkstra variants.'
      ]
    },
    {
      heading: 'Disadvantages & Limits',
      list: [
        '<strong>BFS memory:</strong> Wide graphs (social nets) hold huge frontiers.',
        '<strong>DFS stack overflow:</strong> Deep recursion on large V — use iterative stack or raise limit carefully.',
        '<strong>Weighted edges:</strong> Plain BFS is wrong — use Dijkstra.',
        '<strong>Visited mistakes:</strong> Forgetting visited → infinite loops on cycles.',
        '<strong>Directed vs undirected cycle rules differ</strong> — back edge definitions change.'
      ]
    },
    {
      heading: 'Core Operations',
      text: 'Build the graph, then run BFS or DFS with a clear visited policy.'
    },
    {
      heading: 'Operation 1: Build Adjacency List',
      text: '<strong>What it does:</strong> Convert edge list to neighbor lists.<br/><strong>Undirected:</strong> add both directions. <strong>Directed:</strong> add one.',
      code: `from collections import defaultdict
def build_graph(n, edges, directed=False):
    g = defaultdict(list)
    for u, v in edges:
        g[u].append(v)
        if not directed:
            g[v].append(u)
    return g`,
      language: 'python'
    },
    {
      heading: 'Operation 2: BFS from Source',
      text: '<strong>What it does:</strong> Visit reachable nodes level by level; optionally compute dist[].<br/><strong>Best efficiency:</strong> O(V+E).'
    },
    {
      heading: 'Operation 3: DFS from Source',
      text: '<strong>What it does:</strong> Recurse into unvisited neighbors; mark visited on entry.<br/><strong>Best efficiency:</strong> O(V+E).'
    },
    {
      heading: 'Operation 4: Connected Components',
      text: '<strong>What it does:</strong> For each unvisited node, run BFS/DFS and count one component.<br/><strong>Best efficiency:</strong> O(V+E) total.'
    },
    {
      heading: 'Operation 5: Grid Flood Fill / Islands',
      text: '<strong>What it does:</strong> Treat cells as nodes; DFS/BFS marks a whole land mass.<br/><strong>Best efficiency:</strong> O(rows · cols).'
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'BFS, DFS, components, grid islands',
        code: `from collections import defaultdict, deque
from typing import List, Dict, Set

def build_undirected(n: int, edges: List[List[int]]) -> Dict[int, List[int]]:
    g = defaultdict(list)
    for u, v in edges:
        g[u].append(v)
        g[v].append(u)
    return g

def bfs(graph, src: int) -> List[int]:
    q, seen, order = deque([src]), {src}, []
    while q:
        u = q.popleft()
        order.append(u)
        for v in graph[u]:
            if v not in seen:
                seen.add(v)
                q.append(v)
    return order

def bfs_dist(graph, src: int) -> Dict[int, int]:
    q, dist = deque([src]), {src: 0}
    while q:
        u = q.popleft()
        for v in graph[u]:
            if v not in dist:
                dist[v] = dist[u] + 1
                q.append(v)
    return dist

def dfs(graph, src: int) -> List[int]:
    seen, order = set(), []
    def go(u):
        seen.add(u)
        order.append(u)
        for v in graph[u]:
            if v not in seen:
                go(v)
    go(src)
    return order

def count_components(n: int, edges: List[List[int]]) -> int:
    g = build_undirected(n, edges)
    seen = set()
    def go(u):
        seen.add(u)
        for v in g[u]:
            if v not in seen:
                go(v)
    comps = 0
    for i in range(n):
        if i not in seen:
            comps += 1
            go(i)
    return comps

def num_islands(grid: List[List[str]]) -> int:
    if not grid:
        return 0
    m, n = len(grid), len(grid[0])
    def dfs_cell(i, j):
        if i < 0 or j < 0 or i >= m or j >= n or grid[i][j] != '1':
            return
        grid[i][j] = '0'
        for di, dj in ((1,0),(-1,0),(0,1),(0,-1)):
            dfs_cell(i + di, j + dj)
    count = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                count += 1
                dfs_cell(i, j)
    return count

g = build_undirected(4, [[0,1],[0,2],[1,2],[1,3]])
print("BFS", bfs(g, 0))
print("DFS", dfs(g, 0))
print("dist", bfs_dist(g, 0))
print("components", count_components(5, [[0,1],[1,2],[3,4]]))
print("islands", num_islands([
    ["1","1","0","0"],
    ["1","0","0","1"],
    ["0","0","1","1"],
]))`,
        output: `BFS [0, 1, 2, 3]
DFS [0, 1, 2, 3]
dist {0: 0, 1: 1, 2: 1, 3: 2}
components 2
islands 2`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'BFS and DFS in Java',
        code: `import java.util.*;

public class GraphBFSDFS {
    static List<List<Integer>> build(int n, int[][] edges) {
        List<List<Integer>> g = new ArrayList<>();
        for (int i = 0; i < n; i++) g.add(new ArrayList<>());
        for (int[] e : edges) {
            g.get(e[0]).add(e[1]);
            g.get(e[1]).add(e[0]);
        }
        return g;
    }

    static List<Integer> bfs(List<List<Integer>> g, int src) {
        boolean[] seen = new boolean[g.size()];
        Queue<Integer> q = new ArrayDeque<>();
        List<Integer> order = new ArrayList<>();
        seen[src] = true; q.offer(src);
        while (!q.isEmpty()) {
            int u = q.poll(); order.add(u);
            for (int v : g.get(u)) if (!seen[v]) {
                seen[v] = true; q.offer(v);
            }
        }
        return order;
    }

    static void dfs(List<List<Integer>> g, int u, boolean[] seen, List<Integer> order) {
        seen[u] = true; order.add(u);
        for (int v : g.get(u)) if (!seen[v]) dfs(g, v, seen, order);
    }

    public static void main(String[] args) {
        var g = build(4, new int[][]{{0,1},{0,2},{1,2},{1,3}});
        System.out.println(bfs(g, 0));
        List<Integer> order = new ArrayList<>();
        dfs(g, 0, new boolean[4], order);
        System.out.println(order);
    }
}`,
        output: `[0, 1, 2, 3]
[0, 1, 2, 3]`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Time & Space Complexity',
      table: {
        headers: ['Algorithm', 'Time', 'Space', 'Notes'],
        rows: [
          ['BFS', 'O(V+E)', 'O(V)', 'Queue + visited'],
          ['DFS recursive', 'O(V+E)', 'O(V)', 'Call stack depth O(V) worst'],
          ['DFS iterative', 'O(V+E)', 'O(V)', 'Explicit stack'],
          ['All components', 'O(V+E)', 'O(V)', 'Sum of BFS/DFS runs'],
          ['Grid DFS/BFS', 'O(R·C)', 'O(R·C)', 'Each cell once'],
          ['Adj matrix BFS', 'O(V²)', 'O(V)', 'Neighbor scan is O(V) each']
        ]
      },
      note: 'Interview tip: state representation first ("I model this as a graph where nodes are … and edges mean …") then pick BFS if shortest unweighted, DFS if explore/components/backtrack.'
    },
    {
      heading: 'Common Mistakes & Pitfalls',
      list: [
        '<strong>Not marking visited</strong> → infinite loops on cycles.',
        '<strong>Marking visited too late in BFS</strong> → many duplicate queue entries (usually still correct but slow). Prefer mark on enqueue.',
        '<strong>Using BFS for weighted shortest paths</strong> → wrong; use Dijkstra.',
        '<strong>Forgetting reverse edges</strong> on undirected inputs.',
        '<strong>Grid bounds / mutating input</strong> — sinking islands in-place is fine if allowed; otherwise use visited matrix.',
        '<strong>1-index vs 0-index nodes</strong> in problem statements.'
      ],
      code: `# BFS mark on enqueue (good)
if v not in seen:
    seen.add(v)
    q.append(v)

# Directed cycle detection needs 3 colors, not just boolean:
# 0=unseen, 1=visiting (on stack), 2=done
# back edge to state 1 ⇒ cycle`,
      language: 'python'
    },
    {
      heading: 'Real-World Applications',
      list: [
        '<strong>Social networks:</strong> Friend recommendations and degrees of separation (BFS layers).',
        '<strong>Web crawling:</strong> Queue of URLs (BFS-like politeness variants).',
        '<strong>GPS unweighted hops:</strong> Fewest transfers on a subway graph (BFS).',
        '<strong>Garbage collection:</strong> Mark-and-sweep is graph reachability (DFS/BFS from roots).',
        '<strong>Image processing:</strong> Flood fill connected pixels (DFS/BFS on grid).',
        '<strong>Dependency checks:</strong> Detect import cycles (DFS colors on directed graph).',
        '<strong>Puzzle solving:</strong> Sliding puzzle / word ladder — BFS on implicit state graph.'
      ]
    },
    {
      heading: 'Top Interview Questions on BFS/DFS',
      text: 'Eight classics. Name the graph, then the traversal.',
      note: 'Grid islands → DFS/BFS flood. Word ladder → BFS on word graph. Course cycle → DFS colors or Kahn. Clone graph → BFS/DFS + map.'
    },
    {
      heading: 'Practice Question 1: Number of Islands (LeetCode 200, Medium)',
      text: '<strong>Problem:</strong> Count connected groups of \'1\'s in a grid (4-direction).<br/><strong>Key idea:</strong> For each unvisited land, DFS/BFS sinks the whole island; increment count.<br/><strong>Complexity:</strong> O(R·C).',
      example: {
        title: 'Python Solution',
        code: `def numIslands(grid):
    m, n = len(grid), len(grid[0])
    def dfs(i, j):
        if i<0 or j<0 or i>=m or j>=n or grid[i][j] != '1': return
        grid[i][j] = '0'
        dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1)
    ans = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                ans += 1; dfs(i, j)
    return ans`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Clone Graph (LeetCode 133, Medium)',
      text: '<strong>Problem:</strong> Deep copy a connected undirected graph.<br/><strong>Key idea:</strong> Map original→clone; BFS/DFS create nodes then wire neighbors.<br/><strong>Complexity:</strong> O(V+E).',
      example: {
        title: 'Python Solution',
        code: `def cloneGraph(node):
    if not node: return None
    mp = {node: Node(node.val)}
    q = deque([node])
    while q:
        cur = q.popleft()
        for nei in cur.neighbors:
            if nei not in mp:
                mp[nei] = Node(nei.val); q.append(nei)
            mp[cur].neighbors.append(mp[nei])
    return mp[node]`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 3: Course Schedule (LeetCode 207, Medium)',
      text: '<strong>Problem:</strong> Can you finish courses given prerequisites (directed edges)?<br/><strong>Key idea:</strong> Detect cycle — DFS colors or Kahn indegree BFS.<br/><strong>Complexity:</strong> O(V+E).',
      example: {
        title: 'Python Solution',
        code: `def canFinish(numCourses, prerequisites):
    g = [[] for _ in range(numCourses)]
    for a, b in prerequisites: g[b].append(a)
    state = [0] * numCourses  # 0=todo,1=doing,2=done
    def dfs(u):
        if state[u] == 1: return False
        if state[u] == 2: return True
        state[u] = 1
        for v in g[u]:
            if not dfs(v): return False
        state[u] = 2
        return True
    return all(dfs(i) for i in range(numCourses))`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 4: Word Ladder (LeetCode 127, Hard)',
      text: '<strong>Problem:</strong> Fewest words from beginWord to endWord changing one letter at a time, each intermediate in wordList.<br/><strong>Key idea:</strong> BFS on implicit graph of words; neighbors = one-letter variants in the set.<br/><strong>Complexity:</strong> O(N · L · 26) typical.',
      example: {
        title: 'Python Solution',
        code: `from collections import deque
def ladderLength(beginWord, endWord, wordList):
    words = set(wordList)
    if endWord not in words: return 0
    q = deque([(beginWord, 1)])
    while q:
        w, d = q.popleft()
        if w == endWord: return d
        for i in range(len(w)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                nw = w[:i] + c + w[i+1:]
                if nw in words:
                    words.remove(nw)
                    q.append((nw, d + 1))
    return 0`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 5: Pacific Atlantic Water Flow (LeetCode 417, Medium)',
      text: '<strong>Problem:</strong> Cells that can flow to both oceans (water flows to ≤ height neighbors).<br/><strong>Key idea:</strong> Multi-source DFS/BFS inland from Pacific shores and Atlantic shores; intersection.<br/><strong>Complexity:</strong> O(R·C).',
      example: {
        title: 'Python Solution',
        code: `def pacificAtlantic(heights):
    m, n = len(heights), len(heights[0])
    def flood(starts):
        seen = set(starts)
        q = deque(starts)
        while q:
            i, j = q.popleft()
            for ni, nj in ((i+1,j),(i-1,j),(i,j+1),(i,j-1)):
                if 0<=ni<m and 0<=nj<n and (ni,nj) not in seen \\
                   and heights[ni][nj] >= heights[i][j]:
                    seen.add((ni,nj)); q.append((ni,nj))
        return seen
    pac = [(0, j) for j in range(n)] + [(i, 0) for i in range(m)]
    atl = [(m-1, j) for j in range(n)] + [(i, n-1) for i in range(m)]
    return [list(x) for x in flood(pac) & flood(atl)]`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 6: Rotting Oranges (LeetCode 994, Medium)',
      text: '<strong>Problem:</strong> Minutes until all oranges rot; 4-direction spread each minute.<br/><strong>Key idea:</strong> Multi-source BFS from all rotten cells; count fresh; track time by levels.<br/><strong>Complexity:</strong> O(R·C).',
      example: {
        title: 'Python Solution',
        code: `from collections import deque
def orangesRotting(grid):
    m, n = len(grid), len(grid[0])
    q, fresh = deque(), 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == 2: q.append((i, j))
            elif grid[i][j] == 1: fresh += 1
    mins = 0
    while q and fresh:
        for _ in range(len(q)):
            i, j = q.popleft()
            for ni, nj in ((i+1,j),(i-1,j),(i,j+1),(i,j-1)):
                if 0<=ni<m and 0<=nj<n and grid[ni][nj] == 1:
                    grid[ni][nj] = 2; fresh -= 1; q.append((ni,nj))
        mins += 1
    return mins if fresh == 0 else -1`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 7: Graph Valid Tree (LeetCode 261, Medium)',
      text: '<strong>Problem:</strong> n nodes and n-1 edges form a tree?<br/><strong>Key idea:</strong> Tree ⇔ connected + no cycle ⇔ exactly n-1 edges and one component (Union-Find or DFS).<br/><strong>Complexity:</strong> O(n).',
      example: {
        title: 'Python Solution',
        code: `def validTree(n, edges):
    if len(edges) != n - 1: return False
    g = [[] for _ in range(n)]
    for u, v in edges:
        g[u].append(v); g[v].append(u)
    seen = set()
    def dfs(u, parent):
        seen.add(u)
        for v in g[u]:
            if v == parent: continue
            if v in seen or not dfs(v, u): return False
        return True
    return dfs(0, -1) and len(seen) == n`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 8: 01 Matrix (LeetCode 542, Medium)',
      text: '<strong>Problem:</strong> For each cell, distance to nearest 0.<br/><strong>Key idea:</strong> Multi-source BFS from all zeros; first touch is shortest on unweighted grid.<br/><strong>Complexity:</strong> O(R·C).',
      example: {
        title: 'Python Solution',
        code: `from collections import deque
def updateMatrix(mat):
    m, n = len(mat), len(mat[0])
    dist = [[0]*n for _ in range(m)]
    q = deque()
    for i in range(m):
        for j in range(n):
            if mat[i][j] == 0: q.append((i, j))
            else: dist[i][j] = -1  # unseen
    while q:
        i, j = q.popleft()
        for ni, nj in ((i+1,j),(i-1,j),(i,j+1),(i,j-1)):
            if 0<=ni<m and 0<=nj<n and dist[ni][nj] == -1:
                dist[ni][nj] = dist[i][j] + 1
                q.append((ni, nj))
    return dist`,
        language: 'python',
        type: 'code'
      }
    }
  ]
};
