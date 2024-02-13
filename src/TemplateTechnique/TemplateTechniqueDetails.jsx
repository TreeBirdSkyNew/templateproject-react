import React from 'react';
import  { useState , useEffect} from 'react';
import {TemplateTechniqueService} from "../Services/TemplateTechniqueService";
import {TemplateTinyMCEditor} from "./../Components/TemplateTinyMCEditor";
import { useParams } from 'react-router-dom';

const TemplateTechniqueDetails = () => {

    const { id } = useParams();
    const [templateTechnique,setTemplateTechnique] = useState(null);
    
    useEffect(() => {
        TemplateTechniqueService.getTemplateTechniqueById(id)
            .then((response) => {
                setTemplateTechnique(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                return null;
            })
    },[id]);

    return(
        <div>
            <h3>TemplateTechnique</h3>
            <div className="card card-body bg-light mb-2 mt-2">
                <div className="row">
                    <div className="col-md-3">
                        <strong>templateTechniqueTitle:</strong>
                    </div>
                    <input placeholder="templateTechniqueTitle" 
                           name="templateTechniqueTitle" 
                           className="form-control" 
                           value={templateTechnique?.templateTechniqueTitle} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <strong>TemplateTechniqueName:</strong>
                    </div>
                    <input placeholder="TemplateTechniqueName" 
                           name="TemplateTechniqueName" 
                           className="form-control" 
                           value={templateTechnique?.templateTechniqueName} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateTechniqueVersion:</strong>
                    </div>
                    <input placeholder="templateTechniqueVersion" 
                           name="templateTechniqueVersion" 
                           className="form-control" 
                           value={templateTechnique?.templateTechniqueVersion} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateTechniqueVersionNet:</strong>
                    </div>
                    <input placeholder="templateTechniqueVersionNet" 
                           name="templateTechniqueVersionNet" 
                           className="form-control" 
                           value={templateTechnique?.templateTechniqueVersionNet} />
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <strong>templateTechniqueDescription:</strong>
                    </div>
                    <input placeholder="templateTechniqueDescription" 
                           name="templateTechniqueDescription" 
                           className="form-control" 
                           value={templateTechnique?.templateTechniqueDescription} />
                </div>
                <div>
                    <TemplateTinyMCEditor></TemplateTinyMCEditor>
                </div>
            </div>
        </div>
    );
}

export default TemplateTechniqueDetails;
