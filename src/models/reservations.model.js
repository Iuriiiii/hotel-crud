const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const { ReservationStatusEnum } = require('../reservations/reservations.enum');

module.exports = db.define('reservations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    days: {
        type: DataTypes.STRING,
        allowNull: false
    },
    transactionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'transaction_id',
        defaultValue: null
    },
    roomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'room_id'
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: ReservationStatusEnum.PENDING
    }
});

