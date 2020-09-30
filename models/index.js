'use strict';

const { timeStamp } = require('console');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./user')(sequelize,Sequelize);
db.post = require('./post')(sequelize,Sequelize);
db.message = require('./message')(sequelize,Sequelize);
db.reply = require('./reply')(sequelize,Sequelize);
db.chatting = require('./chatting')(sequelize,Sequelize);

//user <-> post 연결
db.user.hasMany(db.post, {foreignKey: 'user_id', sourceKey: 'id'});
db.post.belongsTo(db.user, {foreignKey: 'user_id', targetKey: 'id'});

//post <-> reply 연결
db.post.hasMany(db.reply, {foreignKey: 'post_id', sourceKey: 'id'});
db.reply.belongsTo(db.post, {foreignKey: 'post_id', targetKey: 'id'});

//user <-> reply 연결
db.user.hasMany(db.reply, {foreignKey: 'user_id', sourceKey: 'id'});
db.reply.belongsTo(db.user, {foreignKey: 'user_id', targetKey: 'id'});

//chatting <-> message 연결
db.chatting.hasMany(db.message, {foreignKey: 'chatting_id', sourceKey: 'id'});
db.message.belongsTo(db.chatting, {foreignKey: 'chatting_id', targetKey: 'id'});

const User_Chattings = sequelize.define('User_Chattings',{},{timestamps:false});

//chatting <-> user N:M 연결
db.chatting.belongsToMany(db.user, { through: User_Chattings });
db.user.belongsToMany(db.chatting,{ through: User_Chattings })


module.exports = db;
