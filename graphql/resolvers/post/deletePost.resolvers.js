const { deletePost } = require("../../../models/post");

const resolvers = {
    Mutation: {
        deletePosts: async (_, { title }) => deletePost(title)
    }
}

module.exports = resolvers;