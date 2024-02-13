import React from 'react';
import  { useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import { TemplateProjectService } from "../Services/TemplateProjectService";


const TemplateProjectList = () => {    
  
    const [templateProjects,setTemplateProjects] = useState([]);
   
    useEffect(() => {
        TemplateProjectService.getAllTemplateProject()
        .then((res) => {
            setTemplateProjects(res);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            return null;
        })
    },[]);

    const handleDeleteProject = async (templateProjectId) => {
        TemplateProjectService.DeleteTemplateProject(templateProjectId)
        .then((response) => {
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            window.location.href = '../TemplateProject';
        })
    }

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
                        <th>Details</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { templateProjects.map(project =>
                        <tr key={project.templateProjectId}>
                            <td>{project.templateProjectName}</td>
                            <td><Link to={`/TemplateProject-details/${project.templateProjectId}`}>Details</Link></td>
                            <td><Link to={`/TemplateProject-update/${project.templateProjectId}`}>Update</Link></td>
                            <td><button onClick={() => handleDeleteProject(project.templateProjectId)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>  
        </div>
    );
};

export default TemplateProjectList;