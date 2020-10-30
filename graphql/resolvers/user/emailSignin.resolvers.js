const { argsToFieldConfigArgumentMap } = require('graphql-tools');
const db = require('../../../models');
const createJWT = require( "../../../middleware/createJWT");

const resolvers = {
    Mutation: {
        emailSignin: async (_, {email, password}) => {

            const user = await db.user.findOne({
                where:{email}
            });
            // console.log(user);
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
            console.log(user.id)
            const token = createJWT(user.id);
            console.log("??");
            console.log(token);
            return {
                ok: true, 
                token,
                error: null,
                user
            }

        }
    },
};

module.exports = resolvers;

