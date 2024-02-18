import React from 'react';
import  { useState } from 'react';
import  { TemplateSolutionService } from "../Services/TemplateSolutionService";
import { Editor } from "@tinymce/tinymce-react"

const TemplateSolutionCreate = () => {

    const [content,setContent] = useState(null);
    const [description,setDescription] = useState(null);

    const [solutionName,setSolutionName] = useState('');  
    const [solutionTitle,setSolutionTitle] = useState(''); 
    const [solutionVersion,setSolutionVersion] = useState(''); 
    const [solutionVersionNet,setSolutionVersionNet] = useState(''); 

    const ChangeSolutionNameHandler = (event) => {
        setSolutionName(event.target.value);
    }

    const ChangeSolutionTitleHandler = (event) => {
        setSolutionTitle(event.target.value);
    }

    const ChangeSolutionVersionHandler = (event) => {
        setSolutionVersion(event.target.value);
    }

    const ChangeSolutionVersionNetHandler = (event) => {
        setSolutionVersionNet(event.target.value);
    }

    const SaveTemplateSolution = (event) => {
        var createSolution = {
            templateSolutionName: solutionName,
            templateSolutionTitle: solutionTitle,
            templateSolutionDescription: content, 
            templateSolutionVersion: solutionVersion,
            templateSolutionVersionNet: solutionVersionNet,
        }
        TemplateSolutionService.createTemplateSolution(createSolution)
        .then((response) => {
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            window.location.href = '../TemplateSolution';
        })
    }

    const Cancel = (event) => {
    }

    return(
    <div className = "container">
        <div className = "row">
            <div className = "card-body">
                <form>
                    <div className = "form-group">
                        <label>TemplateProjectName: </label>
                        <input placeholder="Name" name="Name" className="form-control" 
                            value={solutionName} onChange={ChangeSolutionNameHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectTitle: </label>
                        <input placeholder="Title" name="Title" className="form-control" 
                            value={solutionTitle} onChange={ChangeSolutionTitleHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectVersion: </label>
                        <input placeholder="Version" name="Version" className="form-control" 
                            value={solutionVersion} onChange={ChangeSolutionVersionHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectVersionNet: </label>
                        <input placeholder="VersionNet" name="VersionNet" className="form-control" 
                            value={solutionVersionNet} onChange={ChangeSolutionVersionNetHandler}/>
                    </div>
                    <div>
                        <Editor apiKey='hz02awppy81e4p1nxz56msqlursgj5kqic9dj7dvnv9j9di5'
                            onEditorChange={(newvalue,editor) => {
                                setDescription(newvalue);
                                setContent(editor.getContent({format : 'html'}));
                            }}
                            onInit={(evt,editor ) => {
                                setContent(editor.getContent({format : 'html'}));
                            }}
                            initialValue=''
                            value={description}
                            init={{
                                
                            }}
                        />
                    </div>
                    <button className="btn btn-success" onClick={SaveTemplateSolution}>Save</button>
                    <button className="btn btn-danger" onClick={Cancel} style={{marginLeft: "10px"}}>Cancel</button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default TemplateSolutionCreate;