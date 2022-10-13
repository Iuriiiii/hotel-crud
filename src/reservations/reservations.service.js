const controller = require('./reservations.controller');
const { ReservationStatusEnum } = require('./reservations.enum');

function getAllReservations(req, res) {
    controller.getAllReservations()
        .then((reservations) => res.status(200).json({ reservations }))
        .catch(() => res.status(500).json({ description: 'Internal server error' }));
}

function getReservationsById(req, res) {
    const id = parseInt(req.params['r_id']);

    controller.getReservationsById(id)
        .then((reservation) => res.status(200).json({ reservation }))
        .catch(() => res.status(500).json({ description: 'Internal server error' }));
}

const types = { pending: ReservationStatusEnum.PENDING, paidout: ReservationStatusEnum.PAID_OUT, deleted: ReservationStatusEnum.DELETED };

function getReservationsByType(req, res) {
    const type = types[req.params.type];

    controller.getAllByType(type)
        .then((reservations) => res.status(reservations ? 200 : 404).json({ reservations }))
        .catch(() => res.status(500).json({ description: 'Internal server error' }));
}

function deleteReservation(req, res) {
    const id = parseInt(req.params['r_id']);

    controller.deleteReservationById(id)
        .then(() => res.status(200).json({ description: 'Reservation deleted succefuly (room released)' }))
        .catch((error) => res.status(500).json({ description: `${error}` }));
}

module.exports = {
    getAllReservations,
    getReservationsById,
    getReservationsByType,
    deleteReservation
};