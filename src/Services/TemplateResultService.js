

export const TemplateResultService = {

    getAllTemplateResult: async () => {
        const response = await fetch('https://localhost:7092/api/TemplateResult/Index');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    },

    createTemplateResult: async (templateResultVMForCreation) => {
        const response = await fetch('https://localhost:7092/api/TemplateResult/Create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(templateResultVMForCreation),
          });
          if (!response.ok) {
            throw new Error('Failed to send data');
          }
          return response.json();
    },

    getTemplateResultById: async (id) => {
        const response = await fetch('https://localhost:7092/api/TemplateResult/ResultDetails/'+id);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    },

    updateTemplateResult: async (id,template) => {
        const response = await fetch('https://localhost:7092/api/TemplateResult/Edit/'+id, {
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

    DeleteTemplateResult: async (id) => {
      const response = await fetch('https://localhost:7092/api/TemplateResult/Delete/'+id, {
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

