const db = require('../utils/database');
const { Reservation, User } = require('../models/models');
const { ReservationStatusEnum } = require('./reservations.enum');

async function getAllReservations() {
    return Reservation.findAll();
}

async function getReservationsById(id) {
    return Reservation.findByPk(id);
}

async function getAllByType(type) {
    // return db.query(`SELECT * FROM reservations, transactions WHERE reservations.id = transactions.reservation_id AND transactions.status = ${type}`);
    return Reservation.findAll({ where: { status: type } });
}

async function deleteReservationById(id) {
    return db.transaction(async (transaction) => {
        const reservation = Reservation.findByPk(id);

        if (reservation === null) {
            throw new Error('Invalid reservation');
        }

        // const user = User.findByPk(reservation.userId);

        await Reservation.update({ status: ReservationStatusEnum.DELETED }, { where: { id: reservation.id } });
    });
}

module.exports = {
    getAllReservations,
    getReservationsById,
    getAllByType,
    deleteReservationById
};