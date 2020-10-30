const { argsToFieldConfigArgumentMap } = require('graphql-tools');
const db = require('../../../models');
const createJWT = require( "../../../middleware/createJWT");

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

            const validPassword = user.password === password ? true : false;
            
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
                token: token,
                error: null,
                user
            }

            return newUser;

        }
    },
};

module.exports = resolvers;

//firstName, lastName, phoneNumber, gender, email, password, nickname, mbtiType