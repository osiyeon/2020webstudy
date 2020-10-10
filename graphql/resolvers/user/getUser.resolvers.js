const { argsToFieldConfigArgumentMap } = require('graphql-tools');
const db = require('../../../models');


const resolvers = {
    Query: {
        getUser: async (_, {email}) => {
            try{
                return db.user.findOne({where:{email}});
            }
            catch(err){
                console.log(err);
                return false;
            }
        }
    }
}

module.exports = resolvers;




// const { argsToFieldConfigArgumentMap } = require('graphql-tools');
// const db = require('../../models');

// const resolver = {
//     Query: {
//         getUser: () => {
//             const user = db.user.findOne({
//                 where: {
//                     id: args.id
//                 }
//             },//.include ...) // 해당 db와 연관된 db 가져와라,,
//             user = {
//                 name: 'siyeon',
//                 age: 23
//             }
//             return {
//                 ok: true,
//                 user: {
//                     name: 'siyeon',
//                     age: 23
//                 },
//                 error: 'no error'
//             };
//         }
//     }
// };

// module.exports = resolver;