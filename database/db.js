const Sequelize = require('sequelize');

const sequelize = new Sequelize('chat', 'root', 'Vikram@123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize