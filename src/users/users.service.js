const { json } = require('../utils/database');
const controller = require('./users.controller');
const { validationResult } = require('express-validator');

function getAllUsers(req, res) {
    controller.getAllUsers()
        .then((users) => res.status(200).json({ users }))
        .catch(() => res.status(500).json({ description: 'Internal server error' }));
}

function getUserById(req, res) {
    const id = parseInt(req.params['user_id']);
    console.log('asd');
    controller.getUserById(id)
        .then((user) => res.status(user ? 200 : 404).json({ user }))
        .catch(() => res.status(500).json({ description: 'Internal server error' }));
}

function createUser(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { 'first_name': firstName, 'last_name': lastName, age, role = 'customer' } = req.body;

    controller.createUser({ firstName, lastName, age, role })
        .then((user) => res.status(201).json({ user }))
        .catch(() => res.status(400).json({ description: 'Invalid parameters', 'user_format': { 'first_name': 'string', 'last_name': 'string', age: 'number', role: 'customer | admin' } }));
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}