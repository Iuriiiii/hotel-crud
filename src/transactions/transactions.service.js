const { json } = require('../utils/database');
const controller = require('./transactions.controller');
const { validationResult } = require('express-validator');

function getAllTransactions(req, res) {
    controller.getAllTransactions()
        .then((transactions) => res.status(transactions ? 200 : 404).json({ transactions }))
        .catch(() => res.status(500).json({ description: 'Internal server error' }));
}

function getTransactionById(req, res) {
    const id = parseInt(req.params['t_id']);

    controller.getTransactionById(id)
        .then((transaction) => res.status(transaction ? 200 : 404).json({ transaction }))
        .catch(() => res.status(500).json({ description: 'Internal server error' }));
}

// function deleteTransactionById(req, res) {
//     const id = parseInt(req.params['t_id']);

//     controller.getTransactionById(id)
//         .then((transaction) => res.status(transaction ? 200 : 404).json({ transaction }))
//         .catch(() => res.status(500).json({ description: 'Internal server error' }));
// }

module.exports = {
    getAllTransactions,
    getTransactionById,
    // deleteTransactionById
}