const express = require("express"); //express 불러옴   

const models = require("./models/index.js");
const controllers = require('./controllers');

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Welcome');
})
app.post('/users', controllers.createUser);
app.get('/users', controllers.getAllUser);

// app.get("/", (req, res) =>{
//     res.send('Hello World!');
// });

app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`);
});

models.sequelize.sync().then( () => {
    console.log("DB 연결 성공");
}).catch(err => {
    console.log("연결 실패");
    console.log(err);
})

module.exports = app;
