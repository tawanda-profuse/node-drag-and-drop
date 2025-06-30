// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="markdown" label="Markdown" />
      <DraggableNode type="image" label="Image" />
      <DraggableNode type="video" label="Video" />
      <DraggableNode type="math" label="Math" />
      <DraggableNode type="condition" label="Condition" />
    </div>
  );
};
