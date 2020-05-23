var { userModel } = require ('./models/user');
var { eventRegistrationModel } = require('./models/eventRegistration');
var { eventModel } = require('./models/event');
const winston = require('./winston');
const logger = winston.initLogger("remover");

const deleteUser = (email) => {
    return new Promise((resolve, reject) => {
        userModel.deleteOne({email}, err => {
            if(err){
                logger.error(`error while removing USER: ${err}`);
                reject(err);
            } else {
                logger.info(`USER removed: ${email}`);
                resolve(`USER removed: ${email}`);
            }
        });
    });
}

const deleteEvent = (eventId) => {
    return new Promise((resolve, reject) => {
        eventModel.deleteOne({eventId}, err => {
            if(err){
                logger.error(`error while removing EVENT: ${err}`);
                reject(err);
            } else {
                logger.info(`EVENT removed: ${eventId}.`);
                resolve(`EVENT removed: ${eventId}.`);
            }
        });
    });
}

const deleteEventRegistration = (regId) => {
    return new Promise((resolve, reject) => {
        eventRegistrationModel.deleteOne({regId}, err => {
            if(err){
                logger.error(`error while removing EVENT REGISTRATION: ${err}`);
                reject(err);
            } else {
                logger.info(`EVENT REGISTRATION removed: ${regId}`);
                resolve(`EVENT REGISTRATION removed: ${regId}`);
            }
        });
    });
}

module.exports = {
    deleteUser,
    deleteEvent,
    deleteEventRegistration
}