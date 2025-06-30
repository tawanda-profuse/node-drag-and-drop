import { useState } from "react";
import { NodeTemplate } from "../NodeTemplate";

const VideoNode = ({id}) => {
  const [videoSrc, setVideoSrc] = useState(null);

  const handleVideoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL);
    }
  };

  const fields = [
    {
      key: "video",
      label: "Select a video",
      type: "file",
      render: () => (
        <>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="nodrag"
          />
          {videoSrc && (
            <video
              src={videoSrc}
              controls
              style={{
                maxHeight: "150px",
                width: "100%",
                marginTop: 8,
                objectFit: "contain",
              }}
              className="nodrag"
            />
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
      title="Video Node"
      fields={fields}
      handles={handles}
      onChange={() => {}}
      styles={{ backgroundColor: "yellow" }}
    />
  );
};

export default VideoNode;
