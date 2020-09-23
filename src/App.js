import React, {useState} from 'react';
import Editor from './components/Editor';


function App() {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [javascript, setJavascript] = useState('')

  return (
    <div className="App">
      <div className="pane top__pane">
        <Editor 
        language="xml" 
        displayName="HTML" 
        value={html} 
        onChange={setHtml} />
        <Editor
        language="css" 
        displayName="CSS" 
        value={css} 
        onChange={setCss} />
        <Editor
        language="javascript" 
        displayName="Javascript" 
        value={javascript} 
        onChange={setJavascript} />
      </div>
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