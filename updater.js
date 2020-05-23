var { userModel } = require ('./models/user');
var { eventModel } = require('./models/event');
var { eventRegistrationModel } = require('./models/eventRegistration');
const winston = require('./winston');
const logger = winston.initLogger("updater");

const editUser = (data) => {
    return new Promise((resolve, reject) => {
        userModel.updateOne({email: data.email}, data, (err, _) => {
            if(err){
                logger.error(`error while updating USER: ${err}`);
                reject(err);
            } else {
                logger.info(`updated USER: ${data.email}`);
                resolve(`updated USER: ${data.email}`);
            }
        });
    });
}

const editEvent = (data) => {
    return new Promise((resolve, reject) => {
        eventModel.updateOne({eventId: data.eventId}, data, (err, _) => {
            if(err){
                logger.error(`error while updating EVENT: ${err}`);
                reject(err);
            } else {
                logger.info(`updated EVENT: ${data.eventId}`);
                resolve(`updated EVENT: ${data.eventId}`);
            }
        });
    });
}

const editEventRegistration = (data) => {
    return new Promise((resolve, reject) => {
        eventRegistrationModel.updateOne({regId: data.regId}, data, (err, _) => {
            if(err){
                logger.error(`error while updating EVENT REGISTRATION: ${err}`);
                reject(err);
            } else {
                logger.info(`updated EVENT REGISTRATION: ${data.regId}`);
                resolve(`updated EVENT REGISTRATION: ${data.regId}`);
            }
        });
    });
}

module.exports = {
    editUser,
    editEvent,
    editEventRegistration
}