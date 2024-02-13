import React from 'react';
import {TemplateTechniqueService} from "../Services/TemplateTechniqueService";
import  { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';

const TemplateTechniqueUpdate = () => {    

    const { id } = useParams();
    const [technique,setTechnique] = useState();    
    const [techniqueName,setTechniqueName] = useState('');  
    const [techniqueTitle,setTechniqueTitle] = useState(''); 
    const [techniqueDescription,setTechniqueDescription] = useState(''); 
    const [techniqueVersion,setTechniqueVersion] = useState(''); 
    const [techniqueVersionNet,setTechniqueVersionNet] = useState(''); 
    
    useEffect(() => {
        refreshList(id);
    },[id]);

    const refreshList = async (templateTechniqueId) => {
        TemplateTechniqueService.getTemplateTechniqueById(templateTechniqueId)
            .then((response) => {
                setTechnique(response.data);
                setTechniqueName(technique.templateTechniqueName);
                setTechniqueTitle(technique.templateTechniqueTitle);
                setTechniqueVersion(technique.templateTechniqueVersion);
                setTechniqueVersionNet(technique.templateTechniqueVersionNet);
                setTechniqueDescription(technique.templateTechniqueDescription);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                return null;
            })
    };

    const changeTemplateTechniqueNameHandler = (event) => {
        setTechniqueName(event.target.value);
    }

    const changeTemplateTechniqueTitleHandler = (event) => {
        setTechniqueTitle(event.target.value);
    }

    const changeTemplateTechniqueDescriptionHandler = (event) => {
        setTechniqueDescription(event.target.value);
    }

    const changeTemplateTechniqueVersionHandler = (event) => {
        setTechniqueVersion(event.target.value);
    }

    const changeTemplateTechniqueVersionNetHandler = (event) => {
        setTechniqueVersionNet(event.target.value);
    }

    const SaveTemplateProject = (event) => {
        event.preventDefault();
        let project = {
            templateTechniqueName: techniqueName, 
            templateTechniqueTitle: techniqueTitle, 
            templateTechniqueDescription: techniqueDescription,
            templateTechniqueVersion: techniqueVersion,
            templateTechniqueVersionNet: techniqueVersionNet,
        };
        console.log('templateTechnique => ' + JSON.stringify(project));
        TemplateTechniqueService.updateTemplateTechnique(project,id)
        .then(res =>{  });
        window.location.href = '../TemplateTechnique';
    }

    return(
    <div className = "container">
        <div className = "row">
            <div className = "card-body">
                <form>
                    <div className = "form-group">
                        <label>TemplateProjectName: </label>
                        <input placeholder="Name" name="Name" className="form-control" 
                            value={techniqueName} onChange={changeTemplateTechniqueNameHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectTitle: </label>
                        <input placeholder="Title" name="Title" className="form-control" 
                            value={techniqueTitle} onChange={changeTemplateTechniqueTitleHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectDescription: </label>
                        <input placeholder="Description" name="Description" className="form-control" 
                            value={techniqueDescription} onChange={changeTemplateTechniqueDescriptionHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectVersion: </label>
                        <input placeholder="Version" name="Version" className="form-control" 
                            value={techniqueVersion} onChange={changeTemplateTechniqueVersionHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectVersionNet: </label>
                        <input placeholder="VersionNet" name="VersionNet" className="form-control" 
                            value={techniqueVersionNet} onChange={changeTemplateTechniqueVersionNetHandler}/>
                    </div>
                    <button className="btn btn-success" onClick={SaveTemplateProject}>Save</button>
                </form>
            </div>
        </div>
    </div>
    );
}


export default TemplateTechniqueUpdate;