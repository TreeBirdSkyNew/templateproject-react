

export const TemplateSolutionService = {

    getAllTemplateSolution: async () => {
        const response = await fetch('https://localhost:7043/api/TemplateSolution/Index');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    },

    createTemplateSolution: async (templateSolutionVMForCreation) => {
        const response = await fetch('https://localhost:7043/api/TemplateSolution/Create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(templateSolutionVMForCreation),
          });
          if (!response.ok) {
            throw new Error('Failed to send data');
          }
          return response.json();
    },

    getTemplateSolutionById: async (id) => {
        const response = await fetch('https://localhost:7043/api/TemplateSolution/SolutionDetails/'+id);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    },

    updateTemplateSolution: async (id,template) => {
        const response = await fetch('https://localhost:7043/api/TemplateSolution/Edit/'+id, {
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

    DeleteTemplateSolution: async (id) => {
      const response = await fetch('https://localhost:7043/api/TemplateSolution/Delete/'+id, {
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

