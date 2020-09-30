'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  post.init({
    boardType: DataTypes.STRING,
    title: DataTypes.STRING,
    content_imag: DataTypes.JSON,
    content_text: DataTypes.STRING,
    like: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};