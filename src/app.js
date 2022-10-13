const express = require('express');
const app = express();
const config = require('./utils/config');
const db = require('./utils/database');

db.authenticate()
    .then(() => console.log('Authenticated!'))
    .catch(console.error);

db.sync()
    .then(() => console.log('Syncronized!'))
    .catch(console.error);

app.use(express.json());
app.use('/users', require('./users/users.router'));
app.use('/rooms', require('./rooms/rooms.router'));
app.use('/transactions', require('./transactions/transactions.router'));
app.use('/reservations', require('./reservations/reservations.router'));

app.listen(config.port, () => console.log(`Listening at http://localhost:${config.port}/`));