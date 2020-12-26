const db = require('../../../models');

const resolvers = {
  Query: {
    getMessages: async () => {
      try {
        const messages = await db.message.findAll();

        if (messages) {
          return {
            ok: true,
            messages,
            error: '',
          };
        }
      } catch (error) {
        console.error('Getting messages failed with error: ' + error);
        return {
          ok: false,
          message: null,
          error: '',
        };
      }
    },
  },
};

module.exports = resolvers;