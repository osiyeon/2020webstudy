const { argsToFieldConfigArgumentMap } = require('graphql-tools');
const db = require('../../../models');

const resolvers = {
    Mutation: {
        createReply: async (_, {text}) => {
            console.log("reply")

            const newReply = await db.reply.create({
               text
            });
            return newReply;

        }
    },
};

module.exports = resolvers;

