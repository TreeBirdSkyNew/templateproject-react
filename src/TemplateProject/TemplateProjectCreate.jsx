import React from 'react';
import  { TemplateProjectService } from "../Services/TemplateProjectService";
import  { useState } from 'react';
import { Editor } from "@tinymce/tinymce-react"

const TemplateProjectCreate = () => {

    const [content,setContent] = useState(null);
    const [description,setDescription] = useState(null);

    const [projectName,setProjectName] = useState('');  
    const [projectTitle,setProjectTitle] = useState(''); 
    const [projectVersion,setVersion] = useState(''); 
    const [projectVersionNet,setVersionNet] = useState(''); 

    const ChangeProjectNameHandler = (event) => {
        setProjectName(event.target.value);
    }

    const ChangeProjectTitleHandler = (event) => {
        setProjectTitle(event.target.value);
    }

    const ChangeProjectDescriptionHandler = (event) => {
        setDescription(event.target.value);
    }

    const ChangeProjectVersionHandler = (event) => {
        setVersion(event.target.value);
    }

    const ChangeProjectVersionNetHandler = (event) => {
        setVersionNet(event.target.value);
    }

    const SaveTemplateProject = (event) => {
        var createProject = {
            templateProjectName: projectName,
            templateProjectTitle: projectTitle,
            templateProjectDescription: content, 
            templateProjectVersion: projectVersion,
            templateProjectVersionNet: projectVersionNet,
        }
        console.log(createProject.templateProjectName);
        TemplateProjectService.createTemplateProject(createProject);
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
                            value={projectName} onChange={ChangeProjectNameHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectTitle: </label>
                        <input placeholder="Title" name="Title" className="form-control" 
                            value={projectTitle} onChange={ChangeProjectTitleHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectVersion: </label>
                        <input placeholder="Version" name="Version" className="form-control" 
                            value={projectVersion} onChange={ChangeProjectVersionHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectVersionNet: </label>
                        <input placeholder="VersionNet" name="VersionNet" className="form-control" 
                            value={projectVersionNet} onChange={ChangeProjectVersionNetHandler}/>
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
                    <button className="btn btn-success" onClick={SaveTemplateProject}>Save</button>
                    <button className="btn btn-danger" onClick={Cancel} style={{marginLeft: "10px"}}>Cancel</button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default TemplateProjectCreate;