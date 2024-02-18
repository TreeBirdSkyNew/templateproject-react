import React from 'react';
import  { TemplateResultService } from "../Services/TemplateResultService";
import  { useState } from 'react';

const TemplateResultCreate = () => {

    const [resultName,setResultName] = useState('');  
    const [resultTitle,setResultTitle] = useState(''); 
    const [resultDescription,setResultDescription] = useState(''); 
    const [resultVersion,setResultVersion] = useState(''); 
    const [resultVersionNet,setResultVersionNet] = useState(''); 

    const ChangeResultNameHandler = (event) => {
        setResultName(event.target.value);
    }

    const ChangeResultTitleHandler = (event) => {
        setResultTitle(event.target.value);
    }

    const ChangeResultDescriptionHandler = (event) => {
        setResultDescription(event.target.value);
    }

    const ChangeResultVersionHandler = (event) => {
        setResultVersion(event.target.value);
    }

    const ChangeResultVersionNetHandler = (event) => {
        setResultVersionNet(event.target.value);
    }

    const SaveTemplateResult = (event) => {
        var createResult = {
            templateProjectId:1,
            templateResultName: resultName,
            templateResultTitle: resultTitle,
            templateResultDescription: resultDescription,
            templateResultVersion: resultVersion,
            templateResultVersionNet: resultVersionNet,
        }
        TemplateResultService.createTemplateResult(createResult)
        .then((response) => {
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            window.location.href = '../TemplateResult';
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
                        <label>TemplateResultName: </label>
                        <input placeholder="Name" name="Name" className="form-control" 
                            value={resultName} onChange={ChangeResultNameHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateResultTitle: </label>
                        <input placeholder="Title" name="Title" className="form-control" 
                            value={resultTitle} onChange={ChangeResultTitleHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateResultDescription: </label>
                        <input placeholder="Description" name="Description" className="form-control" 
                            value={resultDescription} onChange={ChangeResultDescriptionHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateResultVersion: </label>
                        <input placeholder="Version" name="Version" className="form-control" 
                            value={resultVersion} onChange={ChangeResultVersionHandler}/>
                    </div>
                    <div className = "form-group">
                        <label>TemplateResultVersionNet: </label>
                        <input placeholder="VersionNet" name="VersionNet" className="form-control" 
                            value={resultVersionNet} onChange={ChangeResultVersionNetHandler}/>
                    </div>
                    <button className="btn btn-success" onClick={SaveTemplateResult}>Save</button>
                    <button className="btn btn-danger" onClick={Cancel} style={{marginLeft: "10px"}}>Cancel</button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default TemplateResultCreate;