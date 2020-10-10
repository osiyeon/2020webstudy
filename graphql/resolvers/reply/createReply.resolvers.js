const { argsToFieldConfigArgumentMap } = require('graphql-tools');
const db = require('../../../models');

const resolvers = {
    Mutation: {
        createPost: async (_, {text}) => {

            const newReply = await db.reply.create({
               text
            });
            return newReply;

        }
    },
};

module.exports = resolvers;

