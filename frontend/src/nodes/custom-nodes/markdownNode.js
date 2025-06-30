import { useState } from "react";
import { NodeTemplate } from "../NodeTemplate";

export const MarkdownNode = ({ id, data }) => {
  const [markdown, setMarkdown] = useState(data?.markdown || "# Hello World");

  const handleChange = (key, value) => setMarkdown(value);

  return (
    <NodeTemplate
      id={id}
      title="Markdown"
      onChange={handleChange}
      fields={[
        { key: "markdown", label: "Markdown", type: "long", value: markdown },
      ]}
      handles={[{ id: `${id}-output`, type: "source", position: "right" }]}
      styles={{
        backgroundColor: "rgb(234, 0, 255)"
      }}
    />
  );
};
