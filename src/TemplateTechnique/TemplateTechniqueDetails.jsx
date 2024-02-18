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
            <div className="card card-body bg-light mb-2 mt-2">
                <div className="row">
                    <div className="col-md-3">
                        <strong>templateTechniqueTitle:</strong>
                    </div>
                    <input placeholder="templateTechniqueTitle" 
                           name="templateTechniqueTitle" 
                           className="form-control" 
                           value={templateTechnique?.templateTechniqueTitle} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <strong>TemplateTechniqueName:</strong>
                    </div>
                    <input placeholder="TemplateTechniqueName" 
                           name="TemplateTechniqueName" 
                           className="form-control" 
                           value={templateTechnique?.templateTechniqueName} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateTechniqueVersion:</strong>
                    </div>
                    <input placeholder="templateTechniqueVersion" 
                           name="templateTechniqueVersion" 
                           className="form-control" 
                           value={templateTechnique?.templateTechniqueVersion} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateTechniqueVersionNet:</strong>
                    </div>
                    <input placeholder="templateTechniqueVersionNet" 
                           name="templateTechniqueVersionNet" 
                           className="form-control" 
                           value={templateTechnique?.templateTechniqueVersionNet} />
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

            </div>
            <div>
                <TemplateTechniqueItemList templateTechniqueId={id} />
            </div>
        </div>
    );
}

export default TemplateTechniqueDetails;
