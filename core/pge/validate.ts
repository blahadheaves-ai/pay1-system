import { Graph } from './types';

export function validateGraph(graph: Graph) {
  const sums: Record<string, number> = {};

  for (const edge of graph.edges) {
    sums[edge.from] = (sums[edge.from] || 0) + edge.weight;
  }

  for (const node in sums) {
    if (sums[node] > 1.0001) {
      throw new Error(`Over-allocation at ${node}`);
    }
  }
}