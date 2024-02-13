import React from 'react';
import {TemplateProjectService} from "../Services/TemplateProjectService";
import  { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';

const TemplateProjectUpdate = () => {    

    const { id } = useParams();
    const [project,setProject] = useState();    
    const [projectName,setProjectName] = useState('');  
    const [projectTitle,setProjectTitle] = useState(''); 
    const [projectDescription,setProjectDescription] = useState(''); 
    const [projectVersion,setProjectVersion] = useState(''); 
    const [projectVersionNet,setProjectVersionNet] = useState(''); 
    
    useEffect(() => {
        refreshList(id);
    },[id]);

    const refreshList = async (templateProjectId) => {
        TemplateProjectService.getTemplateProjectById(templateProjectId)
            .then((response) => {
                setProject(response.data);
                setProjectName(project.templateProjectName);
                setProjectTitle(project.templateProjectTitle);
                setProjectVersion(project.templateProjectVersion);
                setProjectVersionNet(project.templateProjectVersionNet);
                setProjectDescription(project.templateProjectDescription);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                return null;
            })
    };

    const changeTemplateProjectNameHandler = (event) => {
        setProjectName(event.target.value);
    }

    const changeTemplateProjectTitleHandler = (event) => {
        setProjectTitle(event.target.value);
    }

    const changeTemplateProjectDescriptionHandler = (event) => {
        setProjectDescription(event.target.value);
    }

    const changeTemplateProjectVersionHandler = (event) => {
        setProjectVersion(event.target.value);
    }

    const changeTemplateProjectVersionNetHandler = (event) => {
        setProjectVersionNet(event.target.value);
    }

    const SaveTemplateProject = (event) => {
        event.preventDefault();
        let project = {
            templateProjectName: projectName, 
            templateProjectTitle: projectTitle, 
            templateProjectDescription: projectDescription,
            templateProjectVersion: projectVersion,
            templateProjectVersionNet: projectVersionNet,
        };
        console.log('templateProject => ' + JSON.stringify(project));
        TemplateProjectService.updateTemplateProject(project,4)
        .then(res =>{  });
        window.location.href = '../TemplateProject';
    }

    return(
    <div className = "container">
        <div className = "row">
            <div className = "card-body">
                <form>
                    <div className = "form-group">
                        <label>TemplateProjectName: </label>
                        <input placeholder="Name" name="Name" className="form-control" 
                            value={projectName} onChange={changeTemplateProjectNameHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectTitle: </label>
                        <input placeholder="Title" name="Title" className="form-control" 
                            value={projectTitle} onChange={changeTemplateProjectTitleHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectDescription: </label>
                        <input placeholder="Description" name="Description" className="form-control" 
                            value={projectDescription} onChange={changeTemplateProjectDescriptionHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectVersion: </label>
                        <input placeholder="Version" name="Version" className="form-control" 
                            value={projectVersion} onChange={changeTemplateProjectVersionHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectVersionNet: </label>
                        <input placeholder="VersionNet" name="VersionNet" className="form-control" 
                            value={projectVersionNet} onChange={changeTemplateProjectVersionNetHandler}/>
                    </div>
                    <button className="btn btn-success" onClick={SaveTemplateProject}>Save</button>
                </form>
            </div>
        </div>
    </div>
    );
}


export default TemplateProjectUpdate;