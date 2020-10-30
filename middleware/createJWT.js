const jwt = require("jsonwebtoken");

const createJWT = (userId) => {
    const token = jwt.sign({
        id:userId
    },"FSDGDFGsdgfSGDFGGDFDg");
    return token;
};

module.exports = createJWT;