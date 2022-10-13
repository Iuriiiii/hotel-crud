const db = require('../utils/database');
const { DataTypes } = require('sequelize');

module.exports = db.define('hotels', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });

