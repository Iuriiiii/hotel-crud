const Hotel = require('./hotels.model');
const User = require('./users.model');
const PaymentMethod = require('./payment_methods.model');
const Reservation = require('./reservations.model');
const Status = require('./statuses.model');
const Transaction = require('./transactions.model');
const Room = require('./rooms.model');

// Customers;
// Hotels;
// PaymentMethods;
// Reservations;
// Rooms;
// Status;
// Transactions;

module.exports = {
    Hotel,
    User,
    PaymentMethod,
    Reservation,
    Status,
    Transaction,
    Room
};