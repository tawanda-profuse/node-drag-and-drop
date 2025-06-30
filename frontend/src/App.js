import { SubmitButton } from "./components/submit";
import { PipelineToolbar } from "./components/toolbar";
import { PipelineUI } from "./components/ui";
import logo from "./assets/logo.png";

function App() {
  return (
    <div>
      <nav>
        <img src={logo} alt="Logo" title="Logo" />
        <p>Drag and drop the nodes onto the canvas.</p>
      </nav>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
