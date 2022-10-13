const router = require('express').Router();
const service = require('./rooms.service');
const { body } = require('express-validator');

router.get('/', service.getAllRooms);
router.get('/availables', service.getAllAvailableRooms);
router.get('/:room_id(\\d+)', service.getRoomById);

router.patch(
    '/:room_id(\\d+)/reserve',
    body('user_id').isNumeric({ no_symbols: true }),
    body('days').isNumeric({ no_symbols: true }),
    service.reserveRoomById
);

router.patch(
    '/:room_id(\\d+)/pay',
    body('user_id').isNumeric({ no_symbols: true }),
    body('payment').isNumeric(),
    body('method').isNumeric({ no_symbols: true }),
    service.payRoomById);

router.patch('/:room_id(\\d+)/free', service.freeRoomById);

module.exports = router;