const resolvers = {
    Mutation: {
        saySomething: (_, {something}) => something,  //graphql에서 api 호출을 하면 request로 받는거 뿐만아니라 
        //다른 변수들도 들어오기 때문에 argument를 첫번째로 받는거 아님 something을 {arg} => arg.something으로 해도됨.
    },
};

module.exports = resolvers;