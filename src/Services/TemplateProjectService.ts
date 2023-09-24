import axios , {AxiosResponse} from 'axios';
import { templateProject } from '../types/templateProject';


export const TemplateProjectService = {

    getAllTemplateProject: async () => {
        const response: AxiosResponse<templateProject[]> = 
        await axios.get('https://localhost:7265/api/TemplateProject/Index');
        return response;
    },

    createTemplateProject: async (template: templateProject) => {
        return await axios.post('https://localhost:7265/api/TemplateProject/Create', template);
    },

    getTemplateProjectById: async (id: number) => {
        const response: AxiosResponse<templateProject> = 
        await axios.get('https://localhost:7265/api/TemplateProject/ProjectDetails/'+id);
        return response;
    },

    updateTemplateProject: async (template: templateProject, id: number) => {
        return axios.put('https://localhost:7265/api/TemplateProject/Edit/'+id, templateProject);
    },

    deleteTemplateProject: async (id) => {
        return axios.delete('https://localhost:7265/api/TemplateProject/Delete/'+id);
    },
}

