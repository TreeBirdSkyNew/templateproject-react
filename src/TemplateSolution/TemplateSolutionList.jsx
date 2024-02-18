import React from 'react';
import { useState , useEffect } from 'react';
import { Link } from "react-router-dom";
import { TemplateSolutionService } from "../Services/TemplateSolutionService";


const TemplateSolutionList = () => {    
  
    const [templateSolutions,setTemplateSolutions] = useState([]);
   
    useEffect(() => {
        TemplateSolutionService.getAllTemplateSolution()
        .then((res) => {
            setTemplateSolutions(res);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            return null;
        })
    },[]);

    const handleDeleteSolution = async (templateSolutionId) => {
        TemplateSolutionService.DeleteTemplateSolution(templateSolutionId)
        .then((response) => {
            
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            return null;
        })
    }

    return(
        <div>
            <h3>TemplateSolution</h3>
            <div className = "row">
                <Link
                    to={"/TemplateSolution-create/"}
                    className="badge badge-warning">
                    <button className="btn btn-primary">
                        Create
                    </button>
                </Link>
                </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>templateSolutionName</th>
                        <th>Details</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { templateSolutions.map(project =>
                        <tr key={project.templateSolutionId}>
                            <td>{project.templateSolutionName}</td>
                            <td><Link to={`/TemplateSolution-details/${project.templateSolutionId}`}>Details</Link></td>
                            <td><Link to={`/TemplateSolution-update/${project.templateSolutionId}`}>Update</Link></td>
                            <td><button onClick={() => handleDeleteSolution(project.templateSolutionId)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>  
        </div>
    );
};

export default TemplateSolutionList;