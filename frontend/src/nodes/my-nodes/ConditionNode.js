import { useState } from "react";
import { NodeTemplate } from "../NodeTemplate";

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "x > 5");

  const handleChange = (key, value) => setCondition(value);

  return (
    <NodeTemplate
      id={id}
      title="Condition"
      onChange={handleChange}
      fields={[
        {
          key: "condition",
          label: "Condition",
          type: "text",
          value: condition,
        },
      ]}
      handles={[
        { id: `${id}-input`, type: "target", position: "left" },
        {
          id: `${id}-true`,
          type: "source",
          position: "right",
          style: { top: "30%" },
        },
        {
          id: `${id}-false`,
          type: "source",
          position: "right",
          style: { top: "70%" },
        },
      ]}
      styles={{
        backgroundColor: "chocolate",
        color: "lightcyan"
      }}
    />
  );
};
