import { useState } from "react";
import IntentInput from "../components/IntentInput";
import IntentGraph from "../components/IntentGraph";
import { extractIntent } from "../services/api";

export default function Home() {
  const [graph, setGraph] = useState(null);

  async function handleSubmit(text) {
    const res = await extractIntent(text);
    setGraph(res.graph);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Intent OS</h1>
      <IntentInput onSubmit={handleSubmit} />
      <IntentGraph graph={graph} />
    </div>
  );
}
