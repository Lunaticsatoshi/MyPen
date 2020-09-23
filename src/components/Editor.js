import React from 'react';
import 'codemirror/lib/codemiror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import { Controlled as ControlledEditor } from 'react-codemirror2'

function Editor() {
    return (
        <div className="editor__container">
           <div className="editor__title">
               {displayName}
               <button>O/c</button>
            </div> 
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror__wrapper "
            />
      </div>
    ); 
}
export default Editor
