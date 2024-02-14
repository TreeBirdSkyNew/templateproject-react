import React from 'react';
import {TemplateTechniqueItemService} from "../Services/TemplateTechniqueItemService";
import  { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from "@tinymce/tinymce-react"

const TemplateTechniqueItemUpdate = () => {   

    const { id } = useParams();
    const [templateTechniqueItem,setTemplateTechniqueItem] = useState(null);

    const [content,setContent] = useState(null);
    const [description,setDescription] = useState(null);

    const [techniqueItemId,setTechniqueItemId] = useState(null);
    const [projectId,setProjectId] = useState(null);
    const [techniqueItemName,setTechniqueItemName] = useState(null);
    const [techniqueItemTitle,setTechniqueItemTitle] = useState(null);
    const [techniqueItemVersion,setTechniqueItemVersion] = useState(null);
    const [techniqueItemVersionNet,setTechniqueItemVersionNet] = useState(null);

    useEffect(() => {
        TemplateTechniqueItemService.TemplateTechniqueItemDetails(id)
            .then((response) => {
                setTemplateTechniqueItem(response);
                setTechniqueItemId(response.templateTechniqueItemId);
                setProjectId(response.templateProjectId);
                setTechniqueItemName(response.templateTechniqueItemName);
                setTechniqueItemTitle(response.templateTechniqueItemTitle);
                setDescription(response.templateTechniqueItemDescription);
                setTechniqueItemVersion(response.templateTechniqueItemVersion);
                setTechniqueItemVersionNet(response.templateTechniqueItemVersionNet);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                return null;
            })
    },[id]);


    const changeTemplateTechniqueItemNameHandler = (event) => {
        setTechniqueItemName(event.target.value);
    }

    const changeTemplateTechniqueItemTitleHandler = (event) => {
        setTechniqueItemTitle(event.target.value);
    }

    const changeTemplateTechniqueItemVersionHandler = (event) => {
        setTechniqueItemVersion(event.target.value);
    }

    const changeTemplateTechniqueItemVersionNetHandler = (event) => {
        setTechniqueItemVersionNet(event.target.value);
    }

    const SaveTemplateTechniqueItem = (event) => {
        event.preventDefault();
        let project = {
            templateProjectId: projectId, 
            templateTechniqueItemId: techniqueItemId, 
            templateTechniqueItemName: techniqueItemName, 
            templateTechniqueItemTitle: techniqueItemTitle, 
            templateTechniqueItemDescription: content, 
            templateTechniqueItemVersion: techniqueItemVersion,
            templateTechniqueItemVersionNet: techniqueItemVersionNet,
        };
        TemplateTechniqueItemService.updateTemplateTechniqueItem(project,techniqueItemId)
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
            <h3>TemplateTechniqueItem</h3>
            <form>
                <div className="card card-body bg-light mb-2 mt-2">
                    <div className="row">
                        <div className="col-md-3">
                            <strong>templateTechniqueItemTitle:</strong>
                        </div>
                        <input placeholder="templateTechniqueItemTitle" 
                            name="templateTechniqueItemTitle" 
                            className="form-control" 
                            value={templateTechniqueItem?.templateTechniqueItemTitle} 
                            onChange={changeTemplateTechniqueItemTitleHandler}/>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <strong>TemplateTechniqueItemName:</strong>
                        </div>
                        <input placeholder="TemplateTechniqueItemName" 
                            name="TemplateTechniqueItemName" 
                            className="form-control" 
                            value={templateTechniqueItem?.templateTechniqueItemName} 
                            onChange={changeTemplateTechniqueItemNameHandler} />
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <strong>templateTechniqueItemVersion:</strong>
                        </div>
                        <input placeholder="templateTechniqueItemVersion" 
                            name="templateTechniqueItemVersion" 
                            className="form-control" 
                            value={templateTechniqueItem?.templateTechniqueItemVersion} 
                            onChange={changeTemplateTechniqueItemVersionHandler} />
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <strong>templateTechniqueItemVersionNet:</strong>
                        </div>
                        <input placeholder="templateTechniqueItemVersionNet" 
                            name="templateTechniqueItemVersionNet" 
                            className="form-control" 
                            value={templateTechniqueItem?.templateTechniqueItemVersionNet} 
                            onChange={changeTemplateTechniqueItemVersionNetHandler} />
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
                    <button className="btn btn-success" onClick={SaveTemplateTechniqueItem}>Save</button>
                </div>
            </form>
        </div>
    );
}


export default TemplateTechniqueItemUpdate;