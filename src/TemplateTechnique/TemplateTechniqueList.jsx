import React from 'react';
import { useState , useEffect } from 'react';
import { Link } from "react-router-dom";
import { TemplateTechniqueService } from "../Services/TemplateTechniqueService";
import { TemplateProjectService } from "../Services/TemplateProjectService";

const TemplateTechniqueList = () => {    
  
    const [templateTechniques,setTemplateTechniques] = useState([]);
    const [templateProjects,setTemplateProjects] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
   
    useEffect(() => {
        TemplateTechniqueService.getAllTemplateTechnique()
        .then((res) => {
            setTemplateTechniques(res);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            return null;
        })
    },[]);

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
      }, []);


    const handleDeleteTechnique = async (templateTechniqueId) => {
        TemplateTechniqueService.DeleteTemplateTechnique(templateTechniqueId)
        .then((response) => {
            
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            return null;
        })
    }
    
    const handleChange = (event) => {
        TemplateTechniqueService.getAllTemplateTechniqueByProjectId(event.target.value)
        .then((response) => {
            setTemplateTechniques(response);
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
            <h3>TemplateTechnique</h3>
            <div>
            <select value={selectedOption} onChange={handleChange}>
                <option value="">Choose an option</option>
                {templateProjects.map(option => (
                <option key={option.templateProjectId} value={option.templateProjectId}>{option.templateProjectName}</option>
                ))}
            </select>
            </div>
            <div className = "row">
                <Link
                    to={"/TemplateTechnique-create/"}
                    className="badge badge-warning">
                    <button className="btn btn-primary">
                        Create
                    </button>
                </Link>
                </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>templateTechniqueName</th>
                        <th>Details</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { templateTechniques.map(project =>
                        <tr key={project.templateTechniqueId}>
                            <td>{project.templateTechniqueName}</td>
                            <td><Link to={`/TemplateTechnique-details/${project.templateTechniqueId}`}>Details</Link></td>
                            <td><Link to={`/TemplateTechnique-update/${project.templateTechniqueId}`}>Update</Link></td>
                            <td><button onClick={() => handleDeleteTechnique(project.templateTechniqueId)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>  
        </div>
    );
};

export default TemplateTechniqueList;