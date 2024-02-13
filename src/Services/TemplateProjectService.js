

export const TemplateProjectService = {

    getAllTemplateProject: async () => {
        const response = await fetch('https://localhost:7265/api/TemplateProject/Index');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    },

    createTemplateProject: async (templateProjectVMForCreation) => {
        const response = await fetch('https://localhost:7265/api/TemplateProject/Create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(templateProjectVMForCreation),
          });
          if (!response.ok) {
            throw new Error('Failed to send data');
          }
          return response.json();
    },

    getTemplateProjectById: async (id) => {
        const response = await fetch('https://localhost:7265/api/TemplateProject/ProjectDetails/'+id);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    },

    updateTemplateProject: async (id,template) => {
        const response = await fetch('https://localhost:7265/api/TemplateProject/Edit/'+id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(template),
          });
          if (!response.ok) {
            throw new Error('Failed to update data');
          }
          return response.json();
    },

    DeleteTemplateProject: async (id) => {
      const response = await fetch('https://localhost:7265/api/TemplateProject/Delete/'+id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Vous pouvez également inclure d'autres en-têtes nécessaires, comme les jetons d'authentification
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete entity');
      }
    }
}

