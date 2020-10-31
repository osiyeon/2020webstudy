const db = require('../../../models');

const resolvers = {
    Mutation: {
        updateUser: async (_, {id, phoneNumber, password, nickname, mbtiType}, {}) => {
            const user = db.user.findOne({where: {id}});
            console.log(user.id);
            if(!user){
                throw new Error(`Couldn't find user with id ${id}`);
            }
            user.phoneNumber = phoneNumber;
            user.password = password;
            user.nickname = nickname;
            user.mbtiType = mbtiType;
            return user;
        }
    },
};

    
    

module.exports = resolvers;

