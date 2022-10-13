const { Sequelize } = require('sequelize');
const config = require('./config');

module.exports = new Sequelize({
    dialect: 'postgres',
    database: config.db.database,
    host: config.db.host,
    port: config.db.port,
    password: config.db.password,
    username: config.db.user
});