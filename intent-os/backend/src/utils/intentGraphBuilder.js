export function buildIntentGraph(intent) {
  return {
    nodes: [
      { id: "user", label: "User" },
      { id: "goal", label: intent.goal },
      { id: "emotion", label: intent.emotion },

      ...intent.constraints.map((c, i) => ({
        id: `constraint-${i}`,
        label: c
      })),

      ...intent.unknowns.map((u, i) => ({
        id: `unknown-${i}`,
        label: u
      }))
    ],

    edges: [
      { from: "user", to: "goal" },
      { from: "goal", to: "emotion" },

      ...intent.constraints.map((_, i) => ({
        from: "goal",
        to: `constraint-${i}`
      })),

      ...intent.unknowns.map((_, i) => ({
        from: "goal",
        to: `unknown-${i}`
      }))
    ]
  };
}
