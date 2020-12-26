const db = require('../../../models');

const resolvers = {
    Mutation: {
        updateUser: async (_, {id, phoneNumber, password, nickname, mbtiType}, {}) => {
            const user = await db.user.findOne({where: {id}});
            console.log(user.id);
            if(!user){
                throw new Error(`Couldn't find user with id ${id}`);
            }
            else{
                const updateUser = user.update({
                    phoneNumber, password, nickname, mbtiType
                })
                return {
                    ok: true,
                    user: updateUser,
                    error: null
                }
            }
            // user.phoneNumber = phoneNumber;
            // user.password = password;
            // user.nickname = nickname;
            // user.mbtiType = mbtiType;
            // return user.save(db.user);
        }
    },
};

    
    

module.exports = resolvers;

