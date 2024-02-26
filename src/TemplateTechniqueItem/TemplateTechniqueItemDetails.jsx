import React from 'react';
import  { useState , useEffect} from 'react';
import {TemplateTechniqueItemService} from "../Services/TemplateTechniqueItemService";
import { useParams } from 'react-router-dom';
import { Editor } from "@tinymce/tinymce-react"

const TemplateTechniqueItemDetails = () => {

    const { id } = useParams();
    const [templateTechniqueItem,setTemplateTechniqueItem] = useState(null);

    const [content,setContent] = useState(null);
    const [description,setDescription] = useState(null);    

    useEffect(() => {
        TemplateTechniqueItemService.TemplateTechniqueItemDetails(id)
            .then((response) => {
                setTemplateTechniqueItem(response);
                setDescription(response.templateTechniqueItemDescription);
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
            <h3>TemplateTechniqueItem</h3>
            <div className="card card-body bg-light mb-2 mt-2">
                <div className="row">
                    <div className="col-md-3">
                        <strong>templateTechniqueItemTitle:</strong>
                    </div>
                    <input placeholder="templateTechniqueItemTitle" 
                           name="templateTechniqueItemTitle" 
                           className="form-control" 
                           value={templateTechniqueItem?.templateTechniqueItemTitle} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <strong>TemplateTechniqueItemName:</strong>
                    </div>
                    <input placeholder="TemplateTechniqueItemName" 
                           name="TemplateTechniqueItemName" 
                           className="form-control" 
                           value={templateTechniqueItem?.templateTechniqueItemName} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateTechniqueItemVersion:</strong>
                    </div>
                    <input placeholder="templateTechniqueItemVersion" 
                           name="templateTechniqueItemVersion" 
                           className="form-control" 
                           value={templateTechniqueItem?.templateTechniqueItemVersion} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateTechniqueItemVersionNet:</strong>
                    </div>
                    <input placeholder="templateTechniqueItemVersionNet" 
                           name="templateTechniqueItemVersionNet" 
                           className="form-control" 
                           value={templateTechniqueItem?.templateTechniqueItemVersionNet} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateTechniqueItemDescription:</strong>
                    </div>
                    <textarea placeholder="templateTechniqueItemDescription" 
                           name="templateTechniqueItemDescription" 
                           className="form-control" 
                           value={templateTechniqueItem?.templateTechniqueItemDescription} />
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

            </div>
        </div>
    );
}

export default TemplateTechniqueItemDetails;
