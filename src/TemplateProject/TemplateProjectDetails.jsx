import React from 'react';
import  { useState , useEffect} from 'react';
import {TemplateProjectService} from "../Services/TemplateProjectService";
import { useParams } from 'react-router-dom';
import { Editor } from "@tinymce/tinymce-react"


const TemplateProjectDetails = () => {

    const { id } = useParams();
    const [templateProject,setTemplateProject] = useState(null);
    
    const [content,setContent] = useState(null);
    const [description,setDescription] = useState(null);

    useEffect(() => {
        refreshList(id);
    },[id]);

    const refreshList = async (templateProjectId) => {
        TemplateProjectService.getTemplateProjectById(templateProjectId)
            .then((response) => {
                setTemplateProject(response);
                setDescription(response.templateProjectDescription);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                return null;
            })
    };    
        
    return(
        <div>
            <h3>TemplateProject</h3>
            <div className="card card-body bg-light mb-2 mt-2">
                <div className="row">
                    <div className="col-md-3">
                        <strong>templateProjectTitle:</strong>
                    </div>
                    <input placeholder="templateProjectTitle" 
                           name="templateProjectTitle" 
                           className="form-control" 
                           value={templateProject?.templateProjectTitle} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <strong>TemplateProjectName:</strong>
                    </div>
                    <input placeholder="TemplateProjectName" 
                           name="TemplateProjectName" 
                           className="form-control" 
                           value={templateProject?.templateProjectName} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateProjectVersion:</strong>
                    </div>
                    <input placeholder="templateProjectVersion" 
                           name="templateProjectVersion" 
                           className="form-control" 
                           value={templateProject?.templateProjectVersion} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateProjectVersionNet:</strong>
                    </div>
                    <input placeholder="templateProjectVersionNet" 
                           name="templateProjectVersionNet" 
                           className="form-control" 
                           value={templateProject?.templateProjectVersionNet} />
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

export default TemplateProjectDetails;
