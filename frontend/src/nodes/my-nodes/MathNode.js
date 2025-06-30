import { useState } from 'react';
import { NodeTemplate } from '../NodeTemplate';

export const MathNode = ({ id, data }) => {
  const [expression, setExpression] = useState(data?.expression || '2 + 2');

  const handleChange = (key, value) => setExpression(value);

  return (
    <NodeTemplate
      id={id}
      title="Math"
      onChange={handleChange}
      fields={[{ key: 'expression', label: 'Expression', type: 'text', value: expression }]}
      handles={[
        { id: `${id}-input`, type: 'target', position: 'left' },
        { id: `${id}-output`, type: 'source', position: 'right' },
      ]}
      styles={{
        backgroundColor: "orangered",
        color: "white"
      }}
    />
  );
};
