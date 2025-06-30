# Node Drag and Drop (DAG Checker)

This is a drag and drop application that uses ReactFlow to render different kinds of nodes. A canvas is rendered allowing the nodes to be rendered, connected and moved around.

The files for the frontend are inside the [/frontend/src](/frontend/src/) folder and the files for the backend are inside the [/backend](/backend/) folder.

## Node Abstraction

In [/frontend/src](/frontend/src/), you will find a folder called **nodes**. This folder contains JavaScript
files for four types of nodes (inputs, outputs, LLMs, and text). Each of these nodes
contains different text, content, and input/output connections (called “Handles”).

These nodes have a significant amount of shared code which is abstracted in the [NodeTemplate component](/frontend/src/nodes/NodeTemplate.js). This solves the redundancy caused by creating a new node by copying an existing node into a new file
and making modifications, this approach would end up rewriting significant amounts of
code. While this approach is tractable for a small number of nodes, it becomes
difficult to maintain as the number of nodes increases.

The **NodeTemplate** component is an ideal abstraction for these nodes that speeds up the ability to create new nodes and apply styles across nodes in the future. There are five nodes in the [Custom Nodes folder](/frontend/src/nodes/custom-nodes) to showcase the flexibility/efficiency of the Node Template abstraction.

## Styling

The [index.css file](/frontend/src/index.css) applies significant styling which styles
the various components into an appealing, unified design. Considering the size of the application, no React packages/libraries were necessary.

## Text Node Logic

The Text node included in the [/frontend/src/nodes](/frontend/src/nodes/textNode.js) has a field for text input. The width and height of the Text node changes as the user enters more text into the text input, improving visibility for what the user types in. Secondly, users can define variables in their text input. When a user enters a valid JavaScript variable name surrounded by double curly brackets (e.g., “`{{
input }}`”), a new Handle is created on the left side of the Text node that
corresponds to the variable.

## Backend Integration

In the [backend](/backend/) folder, you will find a very simple Python/FastAPI backend which integrates with the frontend of the application. The [Submit component](/frontend/src/components/submit.js) sends the nodes and edges of the pipeline to the **/pipelines/parse** endpoint in the backend when
the button is clicked.

On the backend, the **/pipelines/parse** endpoint in the [main.py file](/backend/main.py) calculates the number of nodes and edges in the pipeline. It also checks whether the nodes and edges in the pipeline form a [directed acyclic graph (DAG)](https://en.wikipedia.org/wiki/Directed_acyclic_graph). The response from this endpoint is in the following format:

`{num_nodes: int, num_edges: int, is_dag: bool}`

There is also an [Alert component](/frontend/src/components/submit.js) inside the submit.js file that
triggers when the frontend receives a response from the backend. This alert displays the values of **num_nodes**, **num_edges**, and **is_dag** in a user-friendly manner. The final result allows a user to create a pipeline, click submit, and then receive an alert with the number of nodes/edges as well as whether the pipeline is a DAG.

## Running the Application

You can run the frontend code by navigating to the **/frontend** directory and running

```bash
npm i
npm start. 
```

You can run the backend code by navigating to the **/backend** directory and running

```bash
uvicorn main:app --reload.
```