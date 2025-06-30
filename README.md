# Node Drag and Drop

This is a drag and drop application that uses ReactFlow to render different kinds of nodes. A canvas is rendered allowing the nodes to be rendered, connected and moved around.

The files for the frontend are inside the [/frontend/src](/frontend/src/) folder and the files for the backend are inside the [/backend](/backend/) folder.

## Node Abstraction

In [/frontend/src](/frontend/src/), you will find a folder called nodes. This folder contains JavaScript
files for four types of nodes (inputs, outputs, LLMs, and text). Each of these nodes
contains different text, content, and input/output connections (called “Handles”).

These nodes have a significant amount of shared code which is abstracted in the [NodeTemplate component](/frontend/src/nodes/NodeTemplate.js). This solves the redundancy caused by creating a new node by copying an existing node into a new file
and making modifications, this approach would end up rewriting significant amounts of
code. While this approach is tractable for a small number of nodes, it becomes
difficult to maintain as the number of nodes increases.

The NodeTemplate component is an ideal abstraction for these nodes that speeds up the ability to create new nodes and apply styles across nodes in the future. There are five nodes in the [Custom Nodes folder](/frontend/src/nodes/custom-nodes) to showcase the flexibility/efficiency of the Node Template abstraction.

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