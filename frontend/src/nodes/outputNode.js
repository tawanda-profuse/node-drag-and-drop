// outputNode.js

import { useState } from "react";
import { NodeTemplate } from "./NodeTemplate";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleChange = (key, value) => {
    if (key === "outputName") setCurrName(value);
    if (key === "outputType") setOutputType(value);
  };

  return (
    <NodeTemplate
      id={id}
      title="Output"
      data={data}
      onChange={handleChange}
      fields={[
        { key: "outputName", label: "Name", type: "text", value: currName },
        {
          key: "outputType",
          label: "Type",
          type: "select",
          value: outputType,
          options: ["Text", "Image"],
        },
      ]}
      handles={[{ id: `${id}-value`, type: "target", position: "left" }]}
      styles={{
        backgroundColor: "rgb(135, 32, 214)",
        color: "lightcyan"
      }}
    />
  );
};
