import { Handle } from "reactflow";
import { useStore } from "../store";

export const NodeTemplate = ({
  id,
  title,
  fields = [],
  handles = [],
  styles = {},
  onChange,
}) => {
  const removeNode = useStore((state) => state.removeNode);
  return (
    <div className="node-template" style={{ ...styles }}>
      {/* Remove button */}
      <button
        className="remove-node-button"
        title="Remove node"
        onClick={() => removeNode(id)}
        tabIndex={-1}
      >
        &times;
      </button>
      <div style={{ marginBottom: 8 }}>
        <strong>{title}</strong>
      </div>

      {fields.map((field, index) => (
        <div key={index} style={{ marginBottom: 6 }}>
          <label>
            {field.label && <>{field.label}: </>}
            {field.render ? (
              field.render()
            ) : field.type === "select" ? (
              <select
                value={field.value}
                onChange={(e) => onChange(field.key, e.target.value)}
              >
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : field.type === "long" ? (
              <textarea
                value={field.value}
                onChange={(e) => onChange(field.key, e.target.value)}
              />
            ) : (
              <input
                type={field.type}
                value={field.value}
                onChange={(e) => onChange(field.key, e.target.value)}
              />
            )}
          </label>
        </div>
      ))}

      {Array.isArray(handles) &&
        handles.map((handle) => (
          <Handle
            key={handle.id}
            type={handle.type}
            position={handle.position}
            id={handle.id}
            style={{ padding: "2px", ...(handle.style || {}) }}
          />
        ))}
    </div>
  );
};
