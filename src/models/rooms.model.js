const db = require('../utils/database');
const { DataTypes } = require('sequelize');

module.exports = db.define('rooms', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    hotelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'hotel_id'
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 300.0
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reservationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    }
}, { timestamps: false });

