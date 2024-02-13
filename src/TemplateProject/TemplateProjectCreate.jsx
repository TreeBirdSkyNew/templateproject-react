import React from 'react';
import  { TemplateProjectService } from "../Services/TemplateProjectService";
import  { useState } from 'react';

const TemplateProjectCreate = () => {

    const projectDefault = {
        templateProjectName: '',
        templateProjectTitle: '',
        templateProjectDescription: '',
        templateProjectVersion: '',
        templateProjectVersionNet: '',
    }

    const [project,setProject] = useState(projectDefault);    
    const [projectName,setProjectName] = useState('');  
    const [projectTitle,setProjectTitle] = useState(''); 
    const [projectDescription,setDescription] = useState(''); 
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
            templateProjectDescription: projectDescription,
            templateProjectVersion: projectVersion,
            templateProjectVersionNet: projectVersionNet,
        }
        setProject(createProject);
        debugger;
        TemplateProjectService.createTemplateProject(project);
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
                        <label>TemplateProjectDescription: </label>
                        <input placeholder="Description" name="Description" className="form-control" 
                            value={projectDescription} onChange={ChangeProjectDescriptionHandler}/>
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
                    <button className="btn btn-success" onClick={SaveTemplateProject}>Save</button>
                    <button className="btn btn-danger" onClick={Cancel} style={{marginLeft: "10px"}}>Cancel</button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default TemplateProjectCreate;