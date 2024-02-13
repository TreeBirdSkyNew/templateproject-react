import React from 'react';
import  { useState , useEffect} from 'react';
import {TemplateProjectService} from "../Services/TemplateProjectService";
import {TemplateTinyMCEditor} from "./../Components/TemplateTinyMCEditor";
import { useParams } from 'react-router-dom';

const TemplateProjectDetails = () => {

    const { id } = useParams();
    const [templateProject,setTemplateProject] = useState(null);
    
    useEffect(() => {
        refreshList(id);
    },[id]);

    const refreshList = async (templateProjectId) => {
        TemplateProjectService.getTemplateProjectById(templateProjectId)
            .then((response) => {
                setTemplateProject(response);
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
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateProjectDescription:</strong>
                    </div>
                    <input placeholder="templateProjectDescription" 
                           name="templateProjectDescription" 
                           className="form-control" 
                           value={templateProject?.templateProjectDescription} />
                </div>
                <div>
                    <TemplateTinyMCEditor></TemplateTinyMCEditor>
                </div>
            </div>
        </div>
    );
}

export default TemplateProjectDetails;
