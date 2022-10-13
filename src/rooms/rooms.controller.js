const db = require('../utils/database');
const { Room, Transaction, Reservation, User } = require('../models/models');
const { ReservationStatusEnum } = require('../reservations/reservations.enum');

async function getAllRooms() {
    return Room.findAll();
}

async function getAllAvailableRooms() {
    return Room.findAll({ where: { reservationId: null } });
}

async function getRoomById(id) {
    return Room.findByPk(id);
}

async function updateRoomById(id, data) {
    return Room.update(data, { where: { id } })
}

async function getUserAndRoom(data) {
    const room = await Room.findByPk(data.roomId);

    if (room === null) {
        // console.log('getUserAndRoom > room === null');
        throw new Error('invalid room');
    }

    const user = await User.findByPk(data.userId);

    if (user === null) {
        // console.log('getUserAndRoom > user === null');
        throw new Error('invalid user');
    }

    return { room, user };
}

async function reserveRoom(data) {
    return db.transaction(async (transaction) => {
        const { room, user } = await getUserAndRoom(data);

        if (room.reservationId !== null) {
            throw new Error('reserved room');
        }

        const reservation = await Reservation.create({ days: data.days, roomId: room.id, userId: user.id });

        await Room.update({ reservationId: reservation.id }, { where: { id: room.id } });
    });
}

async function payRoom(data) {
    return db.transaction(async (transaction) => {
        const { room, user } = await getUserAndRoom(data);

        if (room.reservationId === null) {
            // console.log('room.reservationId === null');
            throw new Error('no reserved room');
        }

        // console.log(room);
        if (data.payment < room.price) {
            throw new Error('insufficient funds');
        }

        const reservation = await Reservation.findByPk(room.reservationId);

        if(reservation.status !== ReservationStatusEnum.PENDING) {
            throw new Error('You can pay just for pending rooms');
        }

        const newTransaction = await Transaction.create({
            userId: user.id,
            roomId: room.id,
            reservationId: room.reservationId,
            method: data.method,
            cost: room.price,
            pay: data.payment,
            returned: data.payment - room.price
        });

        await Reservation.update({ status: ReservationStatusEnum.PAID_OUT, transactionId: newTransaction.id }, { where: { id: room.reservationId } });
    });
}

async function freeRoom(data) {
    return db.transaction(async (transaction) => {
        const room = await Room.findByPk(data.roomId);

        if (room.reservationId === null) {
            throw new Error('non reserved room');
        }

        const reservation = await Reservation.findByPk(room.reservationId);

        if (reservation.status === ReservationStatusEnum.PENDING) {
            await Reservation.update({ status: ReservationStatusEnum.DELETED }, { where: { id: reservation.id } });
            //     throw new Error('only reserved and no payed rooms can be canceled')
        }

        await Room.update({ reservationId: null }, { where: { id: room.id } });
    });
}

module.exports = {
    getAllRooms,
    getRoomById,
    getAllAvailableRooms,
    updateRoomById,
    reserveRoom,
    payRoom,
    freeRoom
};
