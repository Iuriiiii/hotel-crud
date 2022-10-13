const db = require('../utils/database');
const { DataTypes } = require('sequelize');

module.exports = db.define('statuses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });

