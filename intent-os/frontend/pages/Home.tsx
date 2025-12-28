import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Intent OS</h1>

      <textarea
        placeholder="Type your intent..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
        style={{ width: "100%" }}
      />

      <br /><br />

      <button
        onClick={() => alert("Next: API call")}
      >
        Generate Intent Graph
      </button>
    </div>
  );
}
