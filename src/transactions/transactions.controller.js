const db = require('../utils/database');
const { Transaction } = require('../models/models');

async function getAllTransactions() {
    return Transaction.findAll();
}

async function getTransactionById(id) {
    return Transaction.findByPk(id);
}

async function createTransaction(data) {
    return Transaction.create(data);
}

// async function deleteTransactionById(id) {
//     return Transaction.update({});
// }

async function createTransactionByUserAndRoom(user, room) {
    // return Transaction.create(data);
}

module.exports = {
    getAllTransactions,
    getTransactionById,
    createTransaction,
    createTransactionByUserAndRoom
};
