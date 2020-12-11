const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");
const db = require('db');

export default db.define('User', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  ingredients: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});