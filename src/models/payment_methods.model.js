const db = require('../utils/database');
const { DataTypes } = require('sequelize');

console.log('db define payment_methods');

module.exports = db.define('payment_methods', {
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

