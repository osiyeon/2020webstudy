'use strict';

// const { sequelize } = require(".");

// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class post extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   post.init({
//     boardType: DataTypes.STRING,
//     title: DataTypes.STRING,
//     content_imag: DataTypes.JSON,
//     content_text: DataTypes.STRING,
//     like: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'post',
//   });
//   return post;
// };

module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    boardType: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    content_imag: {
      type: DataTypes.JSON
    },
    content_text: {
      type: DataTypes.STRING
    },
    like: {
      type: DataTypes.INTEGER
    }
  })
  return post;
};






