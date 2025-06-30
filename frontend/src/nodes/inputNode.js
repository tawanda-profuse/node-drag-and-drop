// inputNode.js

import { useState } from "react";
import { NodeTemplate } from "./NodeTemplate";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleChange = (key, value) => {
    if (key === "inputName") setCurrName(value);
    if (key === "inputType") setInputType(value);
  };

  return (
    <NodeTemplate
      id={id}
      title="Input"
      data={data}
      onChange={handleChange}
      fields={[
        { key: "inputName", label: "Name", type: "text", value: currName },
        {
          key: "inputType",
          label: "Type",
          type: "select",
          value: inputType,
          options: ["Text", "File"],
        },
      ]}
      handles={[{ id: `${id}-value`, type: "source", position: "right" }]}
      styles={{
        backgroundColor: "rgb(63, 109, 236)",
      }}
    />
  );
};
