require('dotenv').config();

module.exports = {
    port: process.env.PORT || 80,
    nodeEnv: process.env.NODE_ENV || 'production',
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        user: process.env.DB_USER || 'postgress',
        password: process.env.DB_PWD || 'root',
        database: process.env.DB_DATABASE
    },
    pricePerDay: 123.25
};