import React from 'react';
import {TemplateTechniqueService} from "../Services/TemplateTechniqueService";
import { TemplateProjectService } from "../Services/TemplateProjectService";
import  { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from "@tinymce/tinymce-react"

const TemplateTechniqueUpdate = () => {    

    
    const { id } = useParams();
    const [templateTechnique,setTemplateTechnique] = useState(null);
    
    const [content,setContent] = useState(null);
    const [description,setDescription] = useState(null);

    const [techniqueId,setTechniqueId] = useState(null);
    const [projectId,setProjectId] = useState(null);
    const [techniqueName,setTechniqueName] = useState(null);
    const [techniqueTitle,setTechniqueTitle] = useState(null);
    const [techniqueVersion,setTechniqueVersion] = useState(null);
    const [techniqueVersionNet,setTechniqueVersionNet] = useState(null);

    useEffect(() => {
        TemplateTechniqueService.getTemplateTechniqueById(id)
            .then((response) => {
                setTemplateTechnique(response);
                setTechniqueId(response.templateTechniqueId);
                setProjectId(response.templateProjectId);
                setTechniqueName(response.templateTechniqueName);
                setTechniqueTitle(response.templateTechniqueTitle);
                setDescription(response.templateTechniqueDescription);
                setTechniqueVersion(response.templateTechniqueVersion);
                setTechniqueVersionNet(response.templateTechniqueVersionNet);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                return null;
            })
    },[id]);

    

    const changeTemplateTechniqueNameHandler = (event) => {
        setTechniqueName(event.target.value);
    }

    const changeTemplateTechniqueTitleHandler = (event) => {
        setTechniqueTitle(event.target.value);
    }

    const changeTemplateTechniqueVersionHandler = (event) => {
        setTechniqueVersion(event.target.value);
    }

    const changeTemplateTechniqueVersionNetHandler = (event) => {
        setTechniqueVersionNet(event.target.value);
    }

    
    const SaveTemplateTechnique = (event) => {
        event.preventDefault();
        let project = {
            templateProjectId: projectId, 
            templateTechniqueId: techniqueId, 
            templateTechniqueName: techniqueName, 
            templateTechniqueTitle: techniqueTitle, 
            templateTechniqueDescription: content, 
            templateTechniqueVersion: techniqueVersion,
            templateTechniqueVersionNet: techniqueVersionNet,
        };
        TemplateTechniqueService.updateTemplateTechnique(project,techniqueId)
        .then(res =>{ 
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            window.location.href = '../TemplateTechnique';
        })
    }

    return(
        <div>
            <h3>TemplateTechnique</h3>
            <form>
                <div className="card card-body bg-light mb-2 mt-2">
                    <div className="row">
                        <div className="col-md-3">
                            <strong>templateTechniqueTitle:</strong>
                        </div>
                        <input placeholder="templateTechniqueTitle" 
                            name="templateTechniqueTitle" 
                            className="form-control" 
                            value={techniqueTitle} 
                            onChange={changeTemplateTechniqueTitleHandler}/>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <strong>TemplateTechniqueName:</strong>
                        </div>
                        <input placeholder="TemplateTechniqueName" 
                            name="TemplateTechniqueName" 
                            className="form-control" 
                            value={techniqueName} 
                            onChange={changeTemplateTechniqueNameHandler} />
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <strong>templateTechniqueVersion:</strong>
                        </div>
                        <input placeholder="templateTechniqueVersion" 
                            name="templateTechniqueVersion" 
                            className="form-control" 
                            value={techniqueVersion} 
                            onChange={changeTemplateTechniqueVersionHandler} />
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <strong>templateTechniqueVersionNet:</strong>
                        </div>
                        <input placeholder="templateTechniqueVersionNet" 
                            name="templateTechniqueVersionNet" 
                            className="form-control" 
                            value={techniqueVersionNet} 
                            onChange={changeTemplateTechniqueVersionNetHandler} />
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
                    <button className="btn btn-success" onClick={SaveTemplateTechnique}>Save</button>
                </div>
            </form>
        </div>
    );
}


export default TemplateTechniqueUpdate;