const jwt = require("jsonwebtoken");
// import dotenv from "dotenv";
// import path from "path";
// dotenv.config({path:path.resolve(__dirname,".env")});

const createJWT = (userId) => {
    console.log(process.env.JWT_TOKEN);
    const token = jwt.sign ({ id: userId }, process.env.JWT_TOKEN || "");
    return token;
};

module.exports = createJWT;