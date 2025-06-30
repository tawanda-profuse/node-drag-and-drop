// TextNode.js
import { useState, useMemo } from "react";
import { NodeTemplate } from "./NodeTemplate";
import { Handle } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const variables = useMemo(() => {
    const matches = [...currText.matchAll(/{{\s*(\w+)\s*}}/g)];
    return Array.from(new Set(matches.map((match) => match[1])));
  }, [currText]);

  const handleChange = (key, value) => {
    if (key === "text") setCurrText(value);
  };

  const fields = [
    {
      key: "text",
      label: "Text",
      render: () => (
        <textarea
          value={currText}
          onChange={(e) => handleChange("text", e.target.value)}
          rows={Math.max(3, currText.split("\n").length)}
          className="nodrag"
        />
      ),
    },
  ];

  const outputHandle = {
    id: `${id}-output`,
    type: "source",
    position: "right",
  };

  // We'll exclude the dynamic variable handles from NodeTemplate and render them manually
  const handles = [outputHandle];

  return (
    <div style={{ position: "relative", minWidth: 200 }}>
      <NodeTemplate
        id={id}
        title="Text"
        data={data}
        onChange={handleChange}
        fields={fields}
        handles={handles}
        styles={{
          backgroundColor: "#ffb6b6",
          padding: 10,
        }}
      />

      {/* Custom-rendered left-side handles with variable name labels */}
      {variables.map((variable, index) => {
        const topOffset = 40 + index * 30;
        return (
          <div
            key={variable}
            style={{
              position: "absolute",
              right: "100%",
              top: topOffset,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                background: "#eee",
                padding: "2px 6px",
                borderRadius: 4,
                fontSize: 12,
                color: "green",
                border: "1px solid black",
                whiteSpace: "nowrap",
                fontWeight: "bold",
              }}
            >
              {variable}
            </span>
            <Handle
              type="target"
              position="left"
              id={`${id}-input-${variable}`}
              style={{ background: "#000", padding: 2 }}
            />
          </div>
        );
      })}
    </div>
  );
};
