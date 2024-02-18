import React from 'react';
import {TemplateProjectService} from "../Services/TemplateProjectService";
import  { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from "@tinymce/tinymce-react"

const TemplateProjectUpdate = () => {    

    const { id } = useParams();

    const [content,setContent] = useState(null);
    const [description,setDescription] = useState(null);

    const [projectId,setProjectId] = useState(); 
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
                console.log('getTemplateProjectById');
                setProjectId(response.templateProjectId);
                setProjectName(response.templateProjectName);
                setProjectTitle(response.templateProjectTitle);
                setProjectDescription(response.templateProjectDescription);
                setProjectVersion(response.templateProjectVersion);
                setProjectVersionNet(response.templateProjectVersionNet);
                setDescription(response.templateProjectDescription);
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
    };

    const changeTemplateProjectTitleHandler = (event) => {
        setProjectTitle(event.target.value);
    };

    const changeTemplateProjectDescriptionHandler = (event) => {
        setProjectDescription(event.target.value);
    };

    const changeTemplateProjectVersionHandler = (event) => {
        setProjectVersion(event.target.value);
    };

    const changeTemplateProjectVersionNetHandler = (event) => {
        setProjectVersionNet(event.target.value);
    };

    const SaveTemplateProject = (event) => {
        event.preventDefault();
        let project = {
            templateProjectId: projectId, 
            templateProjectName: projectName, 
            templateProjectTitle: projectTitle, 
            templateProjectDescription: content,
            templateProjectVersion: projectVersion,
            templateProjectVersionNet: projectVersionNet,
        };
        console.log('templateProject => ' + JSON.stringify(project));
        TemplateProjectService.updateTemplateProject(id,project)
        .then((response) => {
            setProjectName(response.templateProjectName);
            setProjectTitle(response.templateProjectTitle);
            setProjectDescription(response.templateProjectDescription);
            setProjectVersion(response.templateProjectVersion);
            setProjectVersionNet(response.templateProjectVersionNet);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            window.location.href = '../TemplateProject';
        })
    };

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
                        <label>TemplateProjectVersion: </label>
                        <input placeholder="Version" name="Version" className="form-control" 
                            value={projectVersion} onChange={changeTemplateProjectVersionHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectVersionNet: </label>
                        <input placeholder="VersionNet" name="VersionNet" className="form-control" 
                            value={projectVersionNet} onChange={changeTemplateProjectVersionNetHandler}/>
                    </div>
                    <div>
                        <Editor apiKey='hz02awppy81e4p1nxz56msqlursgj5kqic9dj7dvnv9j9di5'
                            onEditorChange={(newvalue,editor) => {
                                setDescription(newvalue);
                                setContent(editor.getContent({format : 'text'}));
                            }}
                            onInit={(evt,editor ) => {
                                setContent(editor.getContent({format : 'text'}));
                            }}
                            initialValue=''
                            value={description}
                            init={{
                                
                            }}
                        />
                    </div>
                    <button className="btn btn-success" onClick={SaveTemplateProject}>Save</button>
                </form>
            </div>
        </div>
    </div>
    );
}


export default TemplateProjectUpdate;