import React from 'react';
import  { useState , useEffect} from 'react';
import {TemplateSolutionService} from "../Services/TemplateSolutionService";
import { useParams } from 'react-router-dom';
import { Editor } from "@tinymce/tinymce-react"

const TemplateSolutionDetails = () => {

    const { id } = useParams();
    const [templateSolution,setTemplateSolution] = useState(null);

    const [content,setContent] = useState(null);
    const [description,setDescription] = useState(null);
    

    useEffect(() => {
        TemplateSolutionService.getTemplateSolutionById(id)
            .then((response) => {
                setTemplateSolution(response);
                setDescription(response.templateSolutionDescription);
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
            <h3>TemplateSolution</h3>
            <div className="card card-body bg-light mb-2 mt-2">
                <div className="row">
                    <div className="col-md-3">
                        <strong>templateSolutionTitle:</strong>
                    </div>
                    <input placeholder="templateSolutionTitle" 
                           name="templateSolutionTitle" 
                           className="form-control" 
                           value={templateSolution?.templateSolutionTitle} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <strong>TemplateSolutionName:</strong>
                    </div>
                    <input placeholder="TemplateSolutionName" 
                           name="TemplateSolutionName" 
                           className="form-control" 
                           value={templateSolution?.templateSolutionName} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateSolutionVersion:</strong>
                    </div>
                    <input placeholder="templateSolutionVersion" 
                           name="templateSolutionVersion" 
                           className="form-control" 
                           value={templateSolution?.templateSolutionVersion} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateSolutionVersionNet:</strong>
                    </div>
                    <input placeholder="templateSolutionVersionNet" 
                           name="templateSolutionVersionNet" 
                           className="form-control" 
                           value={templateSolution?.templateSolutionVersionNet} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateSolutionDescription:</strong>
                    </div>
                    <textarea placeholder="templateSolutionDescription" 
                           name="templateSolutionDescription" 
                           className="form-control" 
                           value={templateSolution?.templateSolutionDescription} />
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

export default TemplateSolutionDetails;
