import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';


function App() {

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');
  const [srcDoc, setSourceDoc] = useState('')

  useEffect(() => {
    const time = setTimeout(() => {
      setSourceDoc(
        `
       <html>
         <body>${html}</body>
         <style>${css}</style>
        <script>${javascript}</script>
       </html>
  `
      )
    }, 250)

    return () => clearTimeout(time)
  }, [html, css, javascript])


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
          srcDoc={srcDoc}
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