// ImageNode.js
import { useState } from "react";
import { NodeTemplate } from "../NodeTemplate";

const ImageNode = ({ id }) => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const fields = [
    {
      key: "image",
      label: "Select an image",
      type: "file",
      render: () => (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="nodrag"
          />
          {imageSrc && (
            <img src={imageSrc} alt="Selected" className="nodrag image-node" />
          )}
        </>
      ),
    },
  ];

  const handles = [
    { type: "target", position: "top", id: "in" },
    { type: "source", position: "bottom", id: "out" },
  ];

  return (
    <NodeTemplate
      id={id}
      title="Image Node"
      fields={fields}
      handles={handles}
      onChange={() => {}}
      styles={{
        backgroundColor: "rgb(0, 255, 0)",
      }}
    />
  );
};

export default ImageNode;
