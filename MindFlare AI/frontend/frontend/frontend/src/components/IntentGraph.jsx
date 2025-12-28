import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

export default function IntentGraph({ graph }) {
  if (!graph) return null;

  const nodes = graph.nodes.map((node, index) => ({
    id: node.id,
    data: { label: node.label },
    position: { x: index * 150, y: 100 },
  }));

  const edges = graph.edges.map((edge, index) => ({
    id: `e-${index}`,
    source: edge.from,
    target: edge.to,
  }));

  return (
    <div style={{ height: "400px", border: "1px solid #ccc" }}>
      <ReactFlow nodes={nodes} edges={edges} />
    </div>
  );
}
