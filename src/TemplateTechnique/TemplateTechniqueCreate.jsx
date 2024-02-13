import React from 'react';
import  { TemplateTechniqueService } from "../Services/TemplateTechniqueService";
import  { useState } from 'react';

const TemplateTechniqueCreate = () => {

    const techniqueDefault = {
        templateProjectId:0,
        templateTechniqueName: '',
        templateTechniqueTitle: '',
        templateTechniqueDescription: '',
        templateTechniqueVersion: '',
        templateTechniqueVersionNet: '',
    }

    const [technique,setTechnique] = useState(techniqueDefault);    
    const [techniqueName,setTechniqueName] = useState('');  
    const [techniqueTitle,setTechniqueTitle] = useState(''); 
    const [techniqueDescription,setTechniqueDescription] = useState(''); 
    const [techniqueVersion,setTechniqueVersion] = useState(''); 
    const [techniqueVersionNet,setTechniqueVersionNet] = useState(''); 

    const ChangeTechniqueNameHandler = (event) => {
        setTechniqueName(event.target.value);
    }

    const ChangeTechniqueTitleHandler = (event) => {
        setTechniqueTitle(event.target.value);
    }

    const ChangeTechniqueDescriptionHandler = (event) => {
        setTechniqueDescription(event.target.value);
    }

    const ChangeTechniqueVersionHandler = (event) => {
        setTechniqueVersion(event.target.value);
    }

    const ChangeTechniqueVersionNetHandler = (event) => {
        setTechniqueVersionNet(event.target.value);
    }

    const SaveTemplateTechnique = (event) => {
        var createTechnique = {
            templateProjectId:1,
            templateTechniqueName: techniqueName,
            templateTechniqueTitle: techniqueTitle,
            templateTechniqueDescription: techniqueDescription,
            templateTechniqueVersion: techniqueVersion,
            templateTechniqueVersionNet: techniqueVersionNet,
        }
        setTechnique(createTechnique);
        debugger;
        TemplateTechniqueService.createTemplateTechnique(technique);
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
                            value={techniqueName} onChange={ChangeTechniqueNameHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectTitle: </label>
                        <input placeholder="Title" name="Title" className="form-control" 
                            value={techniqueTitle} onChange={ChangeTechniqueTitleHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectDescription: </label>
                        <input placeholder="Description" name="Description" className="form-control" 
                            value={techniqueDescription} onChange={ChangeTechniqueDescriptionHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectVersion: </label>
                        <input placeholder="Version" name="Version" className="form-control" 
                            value={techniqueVersion} onChange={ChangeTechniqueVersionHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectVersionNet: </label>
                        <input placeholder="VersionNet" name="VersionNet" className="form-control" 
                            value={techniqueVersionNet} onChange={ChangeTechniqueVersionNetHandler}/>
                    </div>
                    <button className="btn btn-success" onClick={SaveTemplateTechnique}>Save</button>
                    <button className="btn btn-danger" onClick={Cancel} style={{marginLeft: "10px"}}>Cancel</button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default TemplateTechniqueCreate;