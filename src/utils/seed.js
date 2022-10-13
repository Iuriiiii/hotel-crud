const db = require('./database');
const models = require('../models/models');

db.authenticate()
    .then(() => console.log('Authenticated!'))
    .catch(console.error);

db.sync({ force: true })
    .then(() => {
        models.PaymentMethod.create({ description: 'Credit Card' });
        models.PaymentMethod.create({ description: 'Debit Card' });
        models.PaymentMethod.create({ description: 'Bank Transaction' });
        models.PaymentMethod.create({ description: 'Dept' });
        models.PaymentMethod.create({ description: 'Cash' });

        models.Hotel.create({ name: 'Lasgi Hotel' });

        models.Status.create({ description: 'Earring' });
        models.Status.create({ description: 'Paid Out' });
        models.Status.create({ description: 'Removed' });

        Array.from(Array(10).keys()).forEach((n) => models.Room.create({ hotelId: 1, price: Math.random() * 5000, number: n + 1 }));

        // models.User.create({ firstName: 'Alexander', lastName: 'Casas', role: 'admin', age: 25 });

        console.log('Syncronized!');
    })
    .catch(console.error);

