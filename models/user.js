'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.ENUM("Female", "Male")
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    profileIMG: {
      type: DataTypes.JSON
    },
    nickname: {
      type: DataTypes.STRING
    },
    mbtiType: {
      type: DataTypes.STRING
    },
    isVerified: {
      type: DataTypes.ENUM("Yes", "No")
    }
  })
};