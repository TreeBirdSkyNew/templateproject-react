import React from 'react';
import  { useState , useEffect} from 'react';
import {TemplateTechniqueService} from "../Services/TemplateTechniqueService";
import { useParams } from 'react-router-dom';
import TemplateTechniqueItemList from "./../TemplateTechniqueItem/TemplateTechniqueItemList";

import { Editor } from "@tinymce/tinymce-react"

const TemplateTechniqueDetails = () => {

    const { id } = useParams();
    const [templateTechnique,setTemplateTechnique] = useState(null);

    const [content,setContent] = useState(null);
    const [description,setDescription] = useState(null);
    

    useEffect(() => {
        TemplateTechniqueService.getTemplateTechniqueById(id)
            .then((response) => {
                setTemplateTechnique(response);
                setDescription(response.templateTechniqueDescription);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                return null;
            })
    },[id]);

    

    return(
        <div>
            <h3>TemplateTechnique</h3>
                <div className="row">
                    <div className="col-md-6">
                        <strong>templateTechniqueTitle:</strong>
                        <input placeholder="templateTechniqueTitle" 
                            name="templateTechniqueTitle" 
                            className="form-control" 
                            value={templateTechnique?.templateTechniqueTitle} />
                    </div>
                    <div className="col-md-6">
                        <strong>TemplateTechniqueName:</strong>
                        <input placeholder="TemplateTechniqueName" 
                            name="TemplateTechniqueName" 
                            className="form-control" 
                            value={templateTechnique?.templateTechniqueName} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <strong>templateTechniqueVersion:</strong>
                        <input placeholder="templateTechniqueVersion" 
                            name="templateTechniqueVersion" 
                            className="form-control" 
                            value={templateTechnique?.templateTechniqueVersion} />
                    </div>
                    <div className="col-md-6">
                        <strong>TemplateTechniqueVersionNet:</strong>
                        <input placeholder="TemplateTechniqueVersionNet" 
                            name="TemplateTechniqueVersionNet" 
                            className="form-control" 
                            value={templateTechnique?.templateTechniqueVersionNet} />
                    </div>
                </div>
                <div>
                    <TemplateTechniqueItemList templateTechniqueId={id} />
                </div>
                <div Style="height: 500px;">
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
                            height: 1000
                        }}
                        />
                </div>
        </div>
    );
}

export default TemplateTechniqueDetails;
