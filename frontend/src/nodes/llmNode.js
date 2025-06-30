// llmNode.js

import { NodeTemplate } from "./NodeTemplate";

export const LLMNode = ({ id }) => {
  return (
    <NodeTemplate
      id={id}
      title="LLM"
      fields={[
        {
          key: "info",
          label: "",
          type: "text",
          value: "This is an LLM.",
          readonly: true,
        },
      ]}
      onChange={() => {}}
      handles={[
        {
          id: `${id}-system`,
          type: "target",
          position: "left",
          style: { top: "33%" },
        },
        {
          id: `${id}-prompt`,
          type: "target",
          position: "left",
          style: { top: "66%" },
        },
        { id: `${id}-response`, type: "source", position: "right" },
      ]}
      styles={{
        backgroundColor: "rgb(240, 130, 20)"
      }}
    />
  );
};
