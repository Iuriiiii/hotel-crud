const db = require('../utils/database');
const { User } = require('../models/models');

async function getAllUsers() {
    return User.findAll();
}

async function getUserById(id) {
    return User.findByPk(id);
}

async function createUser(data) {
    return User.create(data);
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
};
