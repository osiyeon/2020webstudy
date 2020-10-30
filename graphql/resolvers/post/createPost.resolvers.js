const db = require('../../../models');

const resolvers = {
    Mutation: {
        createPost: async (_, {
            boardType, title, content_image, content_text, like})=>{
                console.log("post")
            const newPost = await db.post.create({
                boardType,
                title,
                content_image,
                content_text,
                like
            });
            return newPost;

        }
    },
};

module.exports = resolvers;

