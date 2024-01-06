import React, {useState, useEffect,useRef} from "react";
import MonacoEditor from "@monaco-editor/react";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { submitSolutionApi } from "../utils/ApiCall";

const Editor = (props) => {
    const [language, setLanguage] = useState('python');
    const editorRef = useRef(null);
    useEffect(() => {
        // Dynamically set language for existing model]
    if (editorRef.current) {   
        
        window.monaco.editor.setModelLanguage(editorRef.current.getModel(), language);
      }
    }, [language])

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
      };

    const handleSubmit = () => {
        submitSolutionApi({
            id: props.id,
            submission: props.code
        }).then((response) => {

            //console.log("questions response: ",response)
            if (response.status == 200 && response.data) {
                window.alert(response.data.message);
            }
        }).catch((err) => {
            window.alert("Error in submission!!!")
        })
    }
    
    return (
        <div className="editor-container">

                <div className="editor-header">

                <label style={{
                    color: "white"
                }}>
                    Language:
                    <select style={{
                        backgroundColor: "inherit",
                        color: "white"
                    }} onChange={(e) => setLanguage(e.target.value)} value={language}>
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                    </select>
                </label> 

                </div>

                <MonacoEditor
                    height="34rem"
                    language={language}
                    theme="vs-dark"
                    value={props.code}
                    onChange={props.onChange}
                    onMount={handleEditorDidMount}
                                   />

                <button className="code-submit-button" onClick={handleSubmit}>Submit</button>
               
            </div>
    ) ;
}

export default Editor;