import React from 'react';
import  { useState , useEffect} from 'react';
import {TemplateResultService} from "../Services/TemplateResultService";
import { useParams } from 'react-router-dom';

import { Editor } from "@tinymce/tinymce-react"

const TemplateResultDetails = () => {

    const { id } = useParams();
    const [templateResult,setTemplateResult] = useState(null);

    const [content,setContent] = useState(null);
    const [description,setDescription] = useState(null);
    

    useEffect(() => {
        TemplateResultService.getTemplateResultById(id)
            .then((response) => {
                setTemplateResult(response);
                setDescription(response.templateResultDescription);
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
            <h3>TemplateResult</h3>
            <div className="card card-body bg-light mb-2 mt-2">
                <div className="row">
                    <div className="col-md-3">
                        <strong>templateResultTitle:</strong>
                    </div>
                    <input placeholder="templateTechniqueTitle" 
                           name="templateTechniqueTitle" 
                           className="form-control" 
                           value={templateResult?.templateResultTitle} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <strong>TemplateResultName:</strong>
                    </div>
                    <input placeholder="TemplateResultName" 
                           name="TemplateResultName" 
                           className="form-control" 
                           value={templateResult?.templateResultName} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateResultVersion:</strong>
                    </div>
                    <input placeholder="templateResultVersion" 
                           name="templateResultVersion" 
                           className="form-control" 
                           value={templateResult?.templateResultVersion} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateResultVersionNet:</strong>
                    </div>
                    <input placeholder="templateResultVersionNet" 
                           name="templateResultVersionNet" 
                           className="form-control" 
                           value={templateResult?.templateResultVersionNet} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateResultDescription:</strong>
                    </div>
                    <textarea placeholder="templateResultDescription" 
                           name="templateResultDescription" 
                           className="form-control" 
                           value={templateResult?.templateResultDescription} />
                </div>
                <div>
                    <Editor apiKey='hz02awppy81e4p1nxz56msqlursgj5kqic9dj7dvnv9j9di5'
                        onEditorChange={(newvalue,editor) => {
                            setDescription(newvalue);
                            setContent(editor.getContent({format : 'text'}));
                        }}
                        onInit={(evt,editor ) => {

                        }}
                        initialValue=''
                        value={description}
                        init={{
                            
                        }}
                        />
                </div>

            </div>
            
        </div>
    );
}

export default TemplateResultDetails;
