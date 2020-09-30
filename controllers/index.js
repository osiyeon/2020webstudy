const models = require('../models');

const createUser = async(req, res) => {
    try { 
        const user = await models.user.create(req.body);
        return res.status(201).json({
            user,
        });
    } catch(error) {
        return res.status(500).json({error: error.message})
    }
}
const getAllUser = async(req, res) => {
    try {
        const user = await models.user.findAll();
        return res.status(201).json({
            user
        });
    } catch(error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createUser,
    getAllUser,
}