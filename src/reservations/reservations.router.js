const router = require('express').Router();
const service = require('./reservations.service');

router.get('/', service.getAllReservations);
router.get('/:r_id(\\d+)', service.getReservationsById);
router.get('/:type(pending|paidout|deleted)', service.getReservationsByType);

// router.delete('/:r_id(\\d+)', service.deleteReservation);

module.exports = router;