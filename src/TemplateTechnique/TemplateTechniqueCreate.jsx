import React from 'react';
import { useState, useEffect } from 'react';
import { Editor } from "@tinymce/tinymce-react"
import { TemplateProjectService } from "../Services/TemplateProjectService";
import { TemplateTechniqueService } from "../Services/TemplateTechniqueService";


const TemplateTechniqueCreate = () =>
{

    const [content, setContent] = useState(null);
    const [description, setDescription] = useState(null);
    const [templateProjects, setTemplateProjects] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');


    const [techniqueName, setTechniqueName] = useState('');
    const [techniqueTitle, setTechniqueTitle] = useState('');
    const [techniqueVersion, setTechniqueVersion] = useState('');
    const [techniqueVersionNet, setTechniqueVersionNet] = useState('');

    useEffect(() =>
    {
        TemplateProjectService.getAllTemplateProject()
            .then((res) =>
            {
                setTemplateProjects(res);
            })
            .catch((error) =>
            {
                console.log(error);
            })
            .finally(() =>
            {
                return null;
            })
    }, []);
    const ChangeTechniqueNameHandler = (event) =>
    {
        setTechniqueName(event.target.value);
    }

    const ChangeTechniqueTitleHandler = (event) =>
    {
        setTechniqueTitle(event.target.value);
    }

    const ChangeTechniqueVersionHandler = (event) =>
    {
        setTechniqueVersion(event.target.value);
    }

    const ChangeTechniqueVersionNetHandler = (event) =>
    {
        setTechniqueVersionNet(event.target.value);
    }

    const SaveTemplateTechnique = (event) =>
    {
        var createTechnique = {
            templateProjectId: selectedOption,
            templateTechniqueName: techniqueName,
            templateTechniqueTitle: techniqueTitle,
            templateTechniqueDescription: content,
            templateTechniqueVersion: techniqueVersion,
            templateTechniqueVersionNet: techniqueVersionNet,
        }
        TemplateTechniqueService.createTemplateTechnique(createTechnique)
            .then((response) =>
            {
            })
            .catch((error) =>
            {
                console.log(error);
            })
            .finally(() =>
            {
                window.location.href = '../TemplateTechnique';
            })
    }

    const handleChange = (event) =>
    {
        setSelectedOption(event.target.value);
    }

    const Cancel = (event) =>
    {
        window.location.href = '../TemplateTechnique';
    }

    return (
        <div className="container">
            <div className="row">
                <div className="card-body">
                    <form>
                        <div>
                            <select value={selectedOption} onChange={handleChange}>
                                <option value="">Choose an option</option>
                                {templateProjects.map(option => (
                                    <option key={option.templateProjectId} value={option.templateProjectId}>{option.templateProjectName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>TemplateProjectName: </label>
                            <input placeholder="Name" name="Name" className="form-control"
                                value={techniqueName} onChange={ChangeTechniqueNameHandler} />
                        </div>
                        <div className="form-group">
                            <label>TemplateProjectTitle: </label>
                            <input placeholder="Title" name="Title" className="form-control"
                                value={techniqueTitle} onChange={ChangeTechniqueTitleHandler} />
                        </div>
                        <div className="form-group">
                            <label>TemplateProjectVersion: </label>
                            <input placeholder="Version" name="Version" className="form-control"
                                value={techniqueVersion} onChange={ChangeTechniqueVersionHandler} />
                        </div>
                        <div className="form-group">
                            <label>TemplateProjectVersionNet: </label>
                            <input placeholder="VersionNet" name="VersionNet" className="form-control"
                                value={techniqueVersionNet} onChange={ChangeTechniqueVersionNetHandler} />
                        </div>
                        <div>
                            <Editor apiKey='hz02awppy81e4p1nxz56msqlursgj5kqic9dj7dvnv9j9di5'
                                onEditorChange={(newvalue, editor) =>
                                {
                                    setDescription(newvalue);
                                    setContent(editor.getContent({ format: 'html' }));
                                }}
                                onInit={(evt, editor) =>
                                {
                                    setContent(editor.getContent({ format: 'html' }));
                                }}
                                initialValue=''
                                value={description}
                                init={{

                                }}
                            />
                        </div>
                        <button className="btn btn-success" onClick={SaveTemplateTechnique}>Save</button>
                        <button className="btn btn-danger" onClick={Cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TemplateTechniqueCreate;