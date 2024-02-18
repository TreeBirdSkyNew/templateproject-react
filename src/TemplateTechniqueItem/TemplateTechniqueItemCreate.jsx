import React from 'react';
import  { TemplateTechniqueItemService } from "../Services/TemplateTechniqueItemService";
import  { useState } from 'react';

const TemplateTechniqueItemCreate = () => {

    const [techniqueItemName,setTechniqueItemName] = useState('');  
    const [techniqueItemTitle,setTechniqueItemTitle] = useState(''); 
    const [techniqueItemDescription,setTechniqueItemDescription] = useState(''); 
    const [techniqueItemVersion,setTechniqueItemVersion] = useState(''); 
    const [techniqueItemVersionNet,setTechniqueItemVersionNet] = useState(''); 

    const ChangeTechniqueItemNameHandler = (event) => {
        setTechniqueItemName(event.target.value);
    }

    const ChangeTechniqueItemTitleHandler = (event) => {
        setTechniqueItemTitle(event.target.value);
    }

    const ChangeTechniqueItemDescriptionHandler = (event) => {
        setTechniqueItemDescription(event.target.value);
    }

    const ChangeTechniqueItemVersionHandler = (event) => {
        setTechniqueItemVersion(event.target.value);
    }

    const ChangeTechniqueItemVersionNetHandler = (event) => {
        setTechniqueItemVersionNet(event.target.value);
    }

    const SaveTemplateTechniqueItem = (event) => {
        var createTechniqueItem = {
            templateProjectId:1,
            templateTechniqueItemName: techniqueItemName,
            templateTechniqueItemTitle: techniqueItemTitle,
            templateTechniqueItemDescription: techniqueItemDescription,
            templateTechniqueItemVersion: techniqueItemVersion,
            templateTechniqueItemVersionNet: techniqueItemVersionNet,
        }
        TemplateTechniqueItemService.createTemplateTechniqueItem(createTechniqueItem)
        .then((response) => {
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            window.location.href = '../TemplateProject';
        })
    }

    const Cancel = (event) => {
    }

    return(
    <div className = "container">
        <div className = "row">
            <div className = "card-body">
                <form>
                    <div className = "form-group">
                        <label>TemplateTechniqueItemName: </label>
                        <input placeholder="Name" name="Name" className="form-control" 
                            value={techniqueItemName} onChange={ChangeTechniqueItemNameHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateTechniqueItemTitle: </label>
                        <input placeholder="Title" name="Title" className="form-control" 
                            value={techniqueItemTitle} onChange={ChangeTechniqueItemTitleHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateTechniqueItemDescription: </label>
                        <input placeholder="Description" name="Description" className="form-control" 
                            value={techniqueItemDescription} onChange={ChangeTechniqueItemDescriptionHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateTechniqueItemVersion: </label>
                        <input placeholder="Version" name="Version" className="form-control" 
                            value={techniqueItemVersion} onChange={ChangeTechniqueItemVersionHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateTechniqueItemVersionNet: </label>
                        <input placeholder="VersionNet" name="VersionNet" className="form-control" 
                            value={techniqueItemVersionNet} onChange={ChangeTechniqueItemVersionNetHandler}/>
                    </div>
                    <button className="btn btn-success" onClick={SaveTemplateTechniqueItem}>Save</button>
                    <button className="btn btn-danger" onClick={Cancel} style={{marginLeft: "10px"}}>Cancel</button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default TemplateTechniqueItemCreate;