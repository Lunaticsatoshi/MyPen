import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="pane top__pane"></div>
      <div className="pane">
        <iframe 
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        />
      </div>
    </div>
  );
}

export default App;