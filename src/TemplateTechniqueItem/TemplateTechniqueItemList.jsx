import React from 'react';
import { useState , useEffect } from 'react';
import { Link } from "react-router-dom";
import { TemplateTechniqueService } from "../Services/TemplateTechniqueService";
import { TemplateTechniqueItemService } from "../Services/TemplateTechniqueItemService";

const TemplateTechniqueItemList = (props) => {    
  
    const [templateTechniqueItems,setTemplateTechniqueItems] = useState([]);
   
    useEffect(() => {
        TemplateTechniqueItemService.getTemplateTechniqueAllItems(props.templateTechniqueId)
        .then((res) => {
            setTemplateTechniqueItems(res);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            return null;
        })
    },[]);

    const handleDeleteTechniqueItem = async (templateTechniqueId) => {
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
    
    
    return(
        <div>
            <h3>TemplateTechnique</h3>
            <div className = "row">
                <Link
                    to={"/TemplateTechniqueItem-create/"}
                    className="badge badge-warning">
                    <button className="btn btn-primary">
                        Create Item
                    </button>
                </Link>
                </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>templateTechniqueItemName</th>
                        <th>Details</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { templateTechniqueItems.map(project =>
                        <tr key={project.templateTechniqueItemId}>
                            <td>{project.templateTechniqueItemName}</td>
                            <td><Link to={`/TemplateTechniqueItem-details/${project.templateTechniqueItemId}`}>Details</Link></td>
                            <td><Link to={`/TemplateTechniqueItem-update/${project.templateTechniqueItemId}`}>Update</Link></td>
                            <td><button onClick={() => handleDeleteTechniqueItem(project.templateTechniqueItemId)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>  
        </div>
    );
};

export default TemplateTechniqueItemList;