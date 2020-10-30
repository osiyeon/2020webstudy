const { argsToFieldConfigArgumentMap } = require('graphql-tools');
const db = require('../../../models');

const resolvers = {
    Mutation: {
        createUser: async (_, {firstName, lastName, phoneNumber, gender, email, password, nickname, mbtiType}) => {
            console.log("hi")

            const newUser = await db.user.create({
                firstName, lastName, phoneNumber, gender, email, password, nickname, mbtiType
            });
            return newUser;

        }
    },
};

    
    

module.exports = resolvers;

