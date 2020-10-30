const { connect } = require('../../..');
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
                like,
                user: {
                    connect: {
                        id:db.user.id
                    }
                }
            });
            return newPost;

        }
    },
};

module.exports = resolvers;

