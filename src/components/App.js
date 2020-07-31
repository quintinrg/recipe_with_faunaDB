import React from "react";

function App() {
  return (
    <div>
      <Text>Hey what's up</Text>
      <Text bold>More text please</Text>
    </div>
  );
}

function Text(props) {
  return (
    <p style={{ fontWeight: props.bold ? "bold" : "normal" }}>
      {props.children}
    </p>
  );
}

export default App;
