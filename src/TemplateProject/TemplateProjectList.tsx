import React from 'react';
import  { useState , useEffect} from 'react';
import { TemplateProjectService } from "../Services/TemplateProjectService";
import { templateProject } from '../types/templateProject';
import { Link } from "react-router-dom";

const TemplateProjectList = () => {    
  
    const [templateProjects,setTemplateProjects] = useState<templateProject[]>([]);
   
    const refreshList = () => {        
        TemplateProjectService.getAllTemplateProject().then((res) => {
            setTemplateProjects(res.data);
        });
    }

    useEffect(() => {
        refreshList();
    },[]);

    return(
        <div>
            <h3>TemplateProject</h3>
            <div className = "row">
                <Link
                    to={"/TemplateProject-create/"}
                    className="badge badge-warning">
                    <button className="btn btn-primary">
                        Create
                    </button>
                </Link>
                </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>templateProjectName</th>
                        <th>templateProjectTitle</th>
                        <th>templateProjectVersion</th>
                    </tr>
                </thead>
                <tbody>
                    { templateProjects.map(project =>
                        <tr key={project.templateProjectName}>
                            <td>{project.templateProjectTitle}</td>
                            <td>{project.templateProjectVersion}</td>
                        </tr>
                    )}
                </tbody>
            </table>  
        </div>
    );
};

export default TemplateProjectList;