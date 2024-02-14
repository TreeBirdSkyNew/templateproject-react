

export const TemplateTechniqueItemService = {

    getTemplateTechniqueAllItems: async (id) => {
        const response = await fetch('https://localhost:7132/api/TemplateTechnique/TechniqueAllItems/'+id);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    },

    createTemplateTechniqueItem: async (templateTechniqueVMForCreation) => {
        const response = await fetch('https://localhost:7132/api/TemplateTechnique/CreateTechniqueItem', {
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

    TemplateTechniqueItemDetails: async (id) => {
        const response = await fetch('https://localhost:7132/api/TemplateTechnique/TechniqueItemDetails/'+id);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    },

    updateTemplateTechniqueItem: async (template, id) => {
        const response = await fetch('https://localhost:7132/api/TemplateTechnique/EditTechniqueItem/'+id, {
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

    DeleteTemplateTechniqueItem: async (id) => {
      const response = await fetch('https://localhost:7132/api/TemplateTechnique/DeleteTechniqueItem/'+id, {
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

