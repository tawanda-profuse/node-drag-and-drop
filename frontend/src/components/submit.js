// submit.js

import { useState } from "react";
import { useStore } from "../store";
import DAG from "../Directed-Acyclic-Graph.png";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();
  const [isPending, setIsPending] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isDag, setIsDag] = useState(false);

  const handleSubmit = () => {
    setIsPending(true);
    // Simulate a delay to mimic processing time
    setTimeout(async () => {
      try {
        const response = await fetch("http://localhost:8000/pipelines/parse", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          setAlertMessage(
            `There are ${result.num_nodes} node(s), ${
              result.num_edges
            } edge(s), and it is ${
              result.is_dag ? "" : "not"
            } a Directed Acyclic Graph (DAG). A DAG is a way to visually represent a process or series of activities where there is a defined direction of flow and no loops or cycles.`
          );
          setShowAlert(true);
          setIsDag(true);
        } else {
          setAlertMessage("Failed to send data.");
          setShowAlert(true);
          setIsDag(false);
        }
      } catch (error) {
        console.error("Error: ", error);
        setAlertMessage("An error has occurred while sending data.");
        setShowAlert(true);
        setIsDag(false);
      } finally {
        setIsPending(false);
      }
    }, 2000);
  };
  return (
    <>
      <div className="submitButton">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isPending}
          style={{
            backgroundColor: isPending ? "#ddd" : "white",
            cursor: isPending ? "progress" : "pointer",
          }}
        >
          {isPending ? "Processing..." : "Submit"}
        </button>
      </div>
      <Alert
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        alertMessage={alertMessage}
        isDag={isDag}
        setIsDag={setIsDag}
      />
    </>
  );
};

const Alert = ({ showAlert, setShowAlert, alertMessage, isDag, setIsDag }) => {
  return (
    <dialog open={showAlert} className="alert">
      <button
        onClick={() => {
          setShowAlert(false);
          setIsDag(false);
        }}
      >
        &times;
      </button>
      <p style={{ color: isDag ? "black" : "red" }}>{alertMessage}</p>
      {isDag && <img src={DAG} alt="Directed Acyclic Graph" />}
    </dialog>
  );
};
