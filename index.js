const express = require("express"); //express 불러옴   

const { ApolloServer, gql } = require('apollo-server-express');

const models = require("./models/index.js");
const controllers = require('./controllers');

const schema = require('./graphql/schemas');
console.log(schema);

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Welcome');
})
app.post('/users', controllers.createUser);
app.get('/users', controllers.getAllUser);



const server = new ApolloServer({
    schema,
});


server.applyMiddleware( { app } );

models.sequelize.sync().then( () => { //db랑 서버랑 sync 
    console.log("DB 연결 성공");
    app.listen(port, () => {
        console.log(`app is running at http://localhost:${port}`);
    });
}).catch(err => {
    console.log("연결 실패");
    console.log(err);
})



module.exports = app;
