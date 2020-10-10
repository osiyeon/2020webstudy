const { argsToFieldConfigArgumentMap } = require('graphql-tools');
const db = require('../../../models');
const jwt = require( "jsonwebtoken");

const resolvers = {
    Mutation: {
        emailSignin: async (_, {email, password}) => {

            const user = await db.user.findOne({
                where:{email}
            });
            if (!user) {
                return {
                    ok:false,
                    token: null,
                    error: "Cannot find a user with this email",
                    user: null
                }
            }
            const validPassword = await user.compare(
                password,
                user.password
            )
            if (!validPassword){
                return {
                    ok:false,
                    token: null,
                    error: "Password is not correct",
                    user:null
                }   
            }
            const token = createJWT(user.id)
            return {
                ok: true, 
                token:null,
                error: null,
                user
            }

            return newUser;

        }
    },
};

module.exports = resolvers;

//firstName, lastName, phoneNumber, gender, email, password, nickname, mbtiType