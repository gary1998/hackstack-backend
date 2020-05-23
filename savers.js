const { userModel } = require ('./models/user');
const { eventModel } = require('./models/event');
const { eventRegistrationModel } = require('./models/eventRegistration');
const winston = require('./winston');
const logger = winston.initLogger("saver");

const saveUser = (data) => {
    return new Promise((resolve, reject) => {
        new userModel(data).save((err, user) => {
            if(err) {
                logger.error(`error while saving new USER: ${err}`);
                reject(err);
            } else {
                logger.info(`new USER saved: ${user.email}`);
                resolve(user);
            }
        });
    })
}

const saveEvent = (data) => {
    return new Promise((resolve, reject) => {
        new eventModel(data).save((err, event) => {
            if(err) {
                logger.error(`error while saving new EVENT: ${err}`);
                reject(err);
            } else {
                logger.info(`new EVENT saved: ${event.eventId}`);
                resolve(event);
            }
        });
    })
}

const saveEventRegistration = (data) => {
    return new Promise((resolve, reject) => {
        new eventRegistrationModel(data).save((err, eventRegistration) => {
            if(err) {
                logger.error(`error while saving new EVENT REGISTRATION: ${err}`);
                reject(err);
            } else {
                logger.info(`new EVENT REGISTRATION saved: ${eventRegistration.regId}`);
                resolve(eventRegistration);
            }
        });
    })
}

module.exports = {
    saveUser,
    saveEvent,
    saveEventRegistration
}