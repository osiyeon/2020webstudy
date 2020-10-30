const { argsToFieldConfigArgumentMap } = require('graphql-tools');
const db = require('../../../models');

const resolvers = {
    Mutation: {
        createPost: async (_, {boardType, title, content_imag, content_text, like}) => {
            console.log("efwfwf")

            const newPost = await db.post.create({
                boardType, title, content_imag, content_text, like
            });
            return newPost;

        }
    },
};

module.exports = resolvers;

