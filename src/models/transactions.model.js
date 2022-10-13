const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const { TransactionStatusEnum } = require('../transactions/transactions.enum');
const { Room, Reservation } = require('./models');

module.exports = db.define('transactions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    roomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'room_id'
    },
    reservationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'reservation_id'
    },
    method: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cost: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    pay: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    returned: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

