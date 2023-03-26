function bfs(graph, start) {
  let queue = [start];
  let visited = new Set();
  visited.add(start);
  while (queue.length > 0) {
    let curr = queue.shift();
    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return visited;
}

/*
  This function takes a graph represented as an object with keys as nodes and values as arrays of neighbor nodes, and a 
  starting node. It uses a queue data structure to perform a breadth-first traversal of the graph, starting at the 
  specified node. It initializes a queue with the starting node and a visited set with
*/
