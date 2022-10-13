const controller = require('./rooms.controller');


function getAllRooms(req, res) {
    controller.getAllRooms()
        .then((rooms) => res.status(200).json({ rooms }))
        .catch(() => res.status(500).json({ description: 'Internal server error' }));
}

function getAllAvailableRooms(req, res) {
    controller.getAllAvailableRooms()
        .then((rooms) => res.status(rooms ? 200 : 404).json({ rooms }))
        .catch(() => res.status(500).json({ description: 'Internal server error' }));
}

function getRoomById(req, res) {
    const id = parseInt(req.params['room_id']);

    controller.getRoomById(id)
        .then((room) => res.status(room ? 200 : 404).json({ room }))
        .catch(() => res.status(500).json({ description: 'Internal server error' }));
}

const types = { reserve: 0, pay: 1, free: 2 };

function reserveRoomById(req, res) {
    const roomId = parseInt(req.params['room_id']);
    const { 'user_id': userId, days } = req.body;

    controller.reserveRoom({ roomId, userId, days })
        .then(() => res.status(200).json({ description: 'Room reserved succefuly' }))
        .catch((error) => res.status(500).json({ description: `${error}` }));
}

function payRoomById(req, res) {
    const roomId = parseInt(req.params['room_id']);
    const { 'user_id': userId, payment, method } = req.body;

    // console.log({ userId, payment, method });

    controller.payRoom({ roomId, userId, payment, method })
        .then(() => res.status(200).json({ description: 'Room payed succefuly' }))
        .catch((error) => res.status(500).json({ description: `${error}` }));
}

function freeRoomById(req, res) {
    const roomId = parseInt(req.params['room_id']);

    controller.freeRoom({ roomId })
        .then(() => res.status(200).json({ description: 'Room released successfully' }))
        .catch((error) => res.status(500).json({ description: `${error}` }));
}

module.exports = {
    getAllRooms,
    getRoomById,
    getAllAvailableRooms,
    reserveRoomById,
    payRoomById,
    freeRoomById
}