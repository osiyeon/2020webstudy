require('dotenv').config();
const { sendMessage } = require('./sendMessage');

const express = require("express"); //express 불러옴   
const { ApolloServer, gql, PubSub } = require('apollo-server-express');
const http = require('http');

const models = require("./models/index.js");

const schema = require('./graphql/schemas');
console.log(schema);

const app = express();
const PORT = process.env.PORT;
const SUBSCRIPTION_ENDPOINT = process.env.SUBSCRIPTION_ENDPOINT || '/subscriptions';

let verifyCode = Math.floor(Math.random() * (999999 - 100000)) + 100000;
// sendMessage('01065022168',verifyCode);

const pubsub = new PubSub();
pubsub.ee.setMaxListeners(99);

const server = new ApolloServer({
    schema,
    subscriptions: {
        path: SUBSCRIPTION_ENDPOINT,
    },
    context: ({ req, connection }) => {
        return {
            req,
            pubsub: pubsub,
        }
    }
});

server.applyMiddleware( { app } );

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);
httpServer.timeout = 3000;

app.get("/", (req, res) => {
    res.send('Welcome');
})

models.sequelize.sync().then( () => { //db랑 서버랑 sync 
    console.log("DB 연결 성공");
    httpServer.listen(PORT, () => {
        console.log(`app is running at http://localhost:${PORT}`);
    });
    }).catch(err => {
        console.log("연결 실패");
        console.log(err);
})



module.exports = app;
