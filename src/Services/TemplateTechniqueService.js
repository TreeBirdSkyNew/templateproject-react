

export const TemplateTechniqueService = {

    getAllTemplateTechnique: async () => {
        const response = await fetch('https://localhost:7132/api/TemplateTechnique/Index');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    },

    getAllTemplateTechniqueByProjectId: async (id) => {
        const response = await fetch('https://localhost:7132/api/TemplateTechnique/ProjectAllTechniques/'+id);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
  },

    createTemplateTechnique: async (templateTechniqueVMForCreation) => {
        const response = await fetch('https://localhost:7132/api/TemplateTechnique/CreateTechnique', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(templateTechniqueVMForCreation),
          });
          if (!response.ok) {
            throw new Error('Failed to send data');
          }
          return response.json();
    },

    getTemplateTechniqueById: async (id) => {
        const response = await fetch('https://localhost:7132/api/TemplateTechnique/TechniqueDetails/'+id);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    },

    updateTemplateTechnique: async (templateTechniqueVMForUpdate, id) => {
        const response = await fetch('https://localhost:7132/api/TemplateTechnique/EditTechnique/'+id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(templateTechniqueVMForUpdate),
          });
          if (!response.ok) {
            throw new Error('Failed to update data');
          }
          return response.json();
    },

    DeleteTemplateTechnique: async (id) => {
      const response = await fetch('https://localhost:7132/api/TemplateTechnique/DeleteTechnique/'+id, {
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

