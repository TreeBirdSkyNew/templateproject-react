import React from 'react';
import  { TemplateTechniqueService } from "../Services/TemplateTechniqueService";
import  { useState } from 'react';
import { Editor } from "@tinymce/tinymce-react"

const TemplateTechniqueCreate = () => {

    const [content,setContent] = useState(null);
    const [description,setDescription] = useState(null);

    const [techniqueName,setTechniqueName] = useState('');  
    const [techniqueTitle,setTechniqueTitle] = useState(''); 
    const [techniqueVersion,setTechniqueVersion] = useState(''); 
    const [techniqueVersionNet,setTechniqueVersionNet] = useState(''); 

    const ChangeTechniqueNameHandler = (event) => {
        setTechniqueName(event.target.value);
    }

    const ChangeTechniqueTitleHandler = (event) => {
        setTechniqueTitle(event.target.value);
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
            templateTechniqueDescription: content,
            templateTechniqueVersion: techniqueVersion,
            templateTechniqueVersionNet: techniqueVersionNet,
        }
        TemplateTechniqueService.createTemplateTechnique(createTechnique)
        .then((response) => {
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            window.location.href = '../TemplateTechnique';
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
                            value={techniqueName} onChange={ChangeTechniqueNameHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateProjectTitle: </label>
                        <input placeholder="Title" name="Title" className="form-control" 
                            value={techniqueTitle} onChange={ChangeTechniqueTitleHandler}/>
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
                    <button className="btn btn-danger" onClick={Cancel} style={{marginLeft: "10px"}}>Cancel</button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default TemplateTechniqueCreate;