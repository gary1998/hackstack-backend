const mongoose = require('mongoose');
require('dotenv').config({path: './.env'});

const initiateConnection = () => {
    const DB = process.env.DATABASE;
    console.debug(`connecting with mongoDB Atlas: ${DB}`);

    mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.debug('connected with mongoDB Atlas'));
}

module.exports = {
    initiateConnection
}
