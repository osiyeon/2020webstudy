const { argsToFieldConfigArgumentMap } = require('graphql-tools');
const db = require('../../../models');

const resolvers = {
    Query: {
        getPost: async (_, {title}) => {
            try {
                return db.post.findAll({where: {title}})
            }
            catch(err){
                console.log(err)
                return false;
            }
        }
    },
};

module.exports = resolvers;

