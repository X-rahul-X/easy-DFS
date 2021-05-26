var findOrder = function(nc, preqs) {
    
    let graph = buildGraph(nc,preqs);
    let visited = [];
    
    for (let i = 0; i < nc; i ++) {
        visited.push(0);
    }
    
    for (let i = 0; i < nc; i ++) {
        if(!dfs(graph, i, visited)) return false;
    }
    return true
};

const buildGraph = (n, edges) => {
    let graph = Array.from({length: n}, () => []);

    
    for (let edge of edges) {
        let [src, dest] = edge; 
        graph[dest].push(src);
    }

    console.log(graph);
    
    return graph;
}
const dfs = (graph, node, visited) => {
    
    
    // 0 unvisited
    // -1 visiting
    // 1 visited

    
    if (visited[node] === -1)return false;
    if (visited[node] === 1)return true;


    visited[node] = -1;
    let nodes = graph[node];
    
    
    for (let i = 0; i < nodes.length; i ++) {
        if(!dfs(graph, nodes[i], visited)) return false;
    }
    visited[node] = 1;
    return true;
};


