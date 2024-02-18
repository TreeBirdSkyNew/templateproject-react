import React from 'react';
import {TemplateResultService} from "../Services/TemplateResultService";
import  { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from "@tinymce/tinymce-react"

const TemplateResultUpdate = () => {    
    
    const { id } = useParams();
    const [templateResult,setTemplateResult] = useState(null);

    const [content,setContent] = useState(null);
    const [description,setDescription] = useState(null);

    const [resultId,setResultId] = useState(null);
    const [resultName,setResultName] = useState(null);
    const [resultTitle,setResultTitle] = useState(null);
    const [resultVersion,setResultVersion] = useState(null);
    const [resultVersionNet,setResultVersionNet] = useState(null);

    useEffect(() => {
        TemplateResultService.getTemplateResultById(id)
            .then((response) => {
                setTemplateResult(response);
                setResultId(response.templateResultId);
                setResultName(response.templateResultName);
                setResultTitle(response.templateResultTitle);
                setResultVersion(response.templateResultVersion);
                setResultVersionNet(response.templateResultVersionNet);
                setDescription(response.templateResultDescription);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                return null;
            })
    },[id]);


    const changeTemplateResultNameHandler = (event) => {
        setResultName(event.target.value);
    }

    const changeTemplateResultTitleHandler = (event) => {
        setResultTitle(event.target.value);
    }

    const changeTemplateResultVersionHandler = (event) => {
        setResultVersion(event.target.value);
    }

    const changeTemplateResultVersionNetHandler = (event) => {
        setResultVersionNet(event.target.value);
    }

    const SaveTemplateResult = (event) => {
        event.preventDefault();
        let project = {
            templateResultId: resultId, 
            templateResultName: resultName, 
            templateResultTitle: resultTitle, 
            templateResultDescription: content, 
            templateResultVersion: resultVersion,
            templateResultVersionNet: resultVersionNet,
        };
        TemplateResultService.updateTemplateResult(resultId,project)
        .then(res =>{ 
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            window.location.href = '../TemplateResult';
        })
    }

    return(
        <div>
            <h3>TemplateResult</h3>
            <form>
                <div className="card card-body bg-light mb-2 mt-2">
                    <div className="row">
                        <div className="col-md-3">
                            <strong>templateResultTitle:</strong>
                        </div>
                        <input placeholder="templateResultTitle" 
                            name="templateResultTitle" 
                            className="form-control" 
                            value={resultTitle} 
                            onChange={changeTemplateResultTitleHandler}/>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <strong>TemplateResultName:</strong>
                        </div>
                        <input placeholder="TemplateResultName" 
                            name="TemplateResultName" 
                            className="form-control" 
                            value={resultName} 
                            onChange={changeTemplateResultNameHandler} />
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <strong>templateResultVersion:</strong>
                        </div>
                        <input placeholder="templateResultVersion" 
                            name="templateResultVersion" 
                            className="form-control" 
                            value={resultVersion} 
                            onChange={changeTemplateResultVersionHandler} />
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <strong>templateResultVersionNet:</strong>
                        </div>
                        <input placeholder="templateResultVersionNet" 
                            name="templateResultVersionNet" 
                            className="form-control" 
                            value={resultVersionNet} 
                            onChange={changeTemplateResultVersionNetHandler} />
                    </div>
                    
                    <div>
                        <Editor apiKey='hz02awppy81e4p1nxz56msqlursgj5kqic9dj7dvnv9j9di5'
                            onEditorChange={(newvalue,editor) => {
                                setDescription(newvalue);
                                setContent(editor.getContent({format : 'html'}));
                            }}
                            onInit={(evt,editor ) => {
                               
                            }}
                            initialValue=''
                            value={description}
                        />
                    </div>
                    <button className="btn btn-success" onClick={SaveTemplateResult}>Save</button>
                </div>
            </form>
        </div>
    );
}


export default TemplateResultUpdate;