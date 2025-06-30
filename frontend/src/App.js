import { SubmitButton } from "./components/submit";
import { PipelineToolbar } from "./components/toolbar";
import { PipelineUI } from "./components/ui";

function App() {
  return (
    <div>
      <p className="instruction">Drag and drop the nodes onto the canvas.</p>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
