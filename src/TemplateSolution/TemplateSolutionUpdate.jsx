import React from 'react';
import {TemplateSolutionService} from "../Services/TemplateSolutionService";
import  { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from "@tinymce/tinymce-react"

const TemplateSolutionUpdate = () => {    
    
    const { id } = useParams();
    const [templateSolution,setTemplateSolution] = useState(null);

    const [content,setContent] = useState(null);
    const [description,setDescription] = useState(null);

    const [solutionId,setSolutionId] = useState(null);
    const [solutionName,setSolutionName] = useState(null);
    const [solutionTitle,setSolutionTitle] = useState(null);
    const [solutionVersion,setSolutionVersion] = useState(null);
    const [solutionVersionNet,setSolutionVersionNet] = useState(null);

    useEffect(() => {
        TemplateSolutionService.getTemplateSolutionById(id)
            .then((response) => {
                setTemplateSolution(response);
                setSolutionId(response.templateSolutionId);
                setSolutionName(response.templateSolutionName);
                setSolutionTitle(response.templateSolutionTitle);
                setSolutionVersion(response.templateSolutionVersion);
                setSolutionVersionNet(response.templateSolutionVersionNet);
                setDescription(response.templateSolutionDescription);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                return null;
            })
    },[id]);


    const changeTemplateSolutionNameHandler = (event) => {
        event.preventDefault();
        setSolutionName(event.target.value);
    }

    const changeTemplateSolutionTitleHandler = (event) => {
        event.preventDefault();
        setSolutionTitle(event.target.value);
    }

    const changeTemplateSolutionVersionHandler = (event) => {
        event.preventDefault();
        setSolutionVersion(event.target.value);
    }

    const changeTemplateSolutionVersionNetHandler = (event) => {
        event.preventDefault();
        setSolutionVersionNet(event.target.value);
    }

    const SaveTemplateSolution = (event) => {
        event.preventDefault();
        let project = {
            templateSolutionId: solutionId, 
            templateSolutionName: solutionName, 
            templateSolutionTitle: solutionTitle, 
            templateSolutionDescription: content, 
            templateSolutionVersion: solutionVersion,
            templateSolutionVersionNet: solutionVersionNet,
        };
        TemplateSolutionService.updateTemplateSolution(solutionId,project)
        .then(res =>{ 
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            window.location.href = '../TemplateSolution';
        })
    }

    return(
        <div>
            <h3>TemplateSolution</h3>
            <form>
                <div className="card card-body bg-light mb-2 mt-2">
                    <div className="row">
                        <div className="col-md-3">
                            <strong>templateSolutionTitle:</strong>
                        </div>
                        <input placeholder="templateSolutionTitle" 
                            name="templateSolutionTitle" 
                            className="form-control" 
                            value={solutionTitle} 
                            onChange={changeTemplateSolutionTitleHandler}/>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <strong>TemplateSolutionName:</strong>
                        </div>
                        <input placeholder="TemplateSolutionName" 
                            name="TemplateSolutionName" 
                            className="form-control" 
                            value={solutionName} 
                            onChange={changeTemplateSolutionNameHandler} />
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <strong>templateSolutionVersion:</strong>
                        </div>
                        <input placeholder="templateSolutionVersion" 
                            name="templateSolutionVersion" 
                            className="form-control" 
                            value={solutionVersion} 
                            onChange={changeTemplateSolutionVersionHandler} />
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <strong>templateSolutionVersionNet:</strong>
                        </div>
                        <input placeholder="templateSolutionVersionNet" 
                            name="templateSolutionVersionNet" 
                            className="form-control" 
                            value={solutionVersionNet} 
                            onChange={changeTemplateSolutionVersionNetHandler} />
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
                    <button className="btn btn-success" onClick={SaveTemplateSolution}>Save</button>
                </div>
            </form>
        </div>
    );
}


export default TemplateSolutionUpdate;