function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  for (let neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
  return visited;
}

/*
Explanation: This function takes a graph represented as an object with keys as nodes and values as arrays of neighbor nodes, a starting node, 
and a set of visited nodes (which defaults to an empty set). It uses recursion to perform a depth-first traversal of the graph, starting at 
the specified node. It adds the starting node to the visited set and iterates over its neighbors. For each unvisited neighbor, it calls the 
dfs function recursively with the neighbor node and the updated visited set. This process continues until all reachable nodes from the starting 
node have been visited, and the function returns the visited set.
*/
