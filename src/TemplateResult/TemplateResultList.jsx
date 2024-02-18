import React from 'react';
import { useState , useEffect } from 'react';
import { Link } from "react-router-dom";
import { TemplateResultService } from "../Services/TemplateResultService";

const TemplateResultList = () => {    
  
    const [templateResults,setTemplateResults] = useState([]);
   
    useEffect(() => {
        TemplateResultService.getAllTemplateResult()
        .then((res) => {
            setTemplateResults(res);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            return null;
        })
    },[]);

    const handleDeleteResult = async (templateResultId) => {
        TemplateResultService.DeleteTemplateResult(templateResultId)
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
        TemplateResultService.getAllTemplateResult(event.target.value)
        .then((response) => {
            setTemplateResults(response);
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
            
            <div className = "row">
                <Link
                    to={"/TemplateResult-create/"}
                    className="badge badge-warning">
                    <button className="btn btn-primary">
                        Create
                    </button>
                </Link>
                </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>templateResultName</th>
                        <th>Details</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { templateResults.map(project =>
                        <tr key={project.templateResultId}>
                            <td>{project.templateResultName}</td>
                            <td><Link to={`/TemplateResult-details/${project.templateResultId}`}>Details</Link></td>
                            <td><Link to={`/TemplateResult-update/${project.templateResultId}`}>Update</Link></td>
                            <td><button onClick={() => handleDeleteResult(project.templateResultId)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>  
        </div>
    );
};

export default TemplateResultList;