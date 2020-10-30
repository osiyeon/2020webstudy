const { argsToFieldConfigArgumentMap } = require('graphql-tools');
const db = require('../../../models');

const resolvers = {
    Query: {
        getAllPost: async () => {
            try {
                return db.post.findAll()
            }
            catch(err){
                console.log(err)
                return false;
            }
        }
    },
};

module.exports = resolvers;

