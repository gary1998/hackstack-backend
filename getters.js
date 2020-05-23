var { userModel } = require ('./models/user');
var { eventModel } = require('./models/event');
var { eventRegistrationModel } = require('./models/eventRegistration');

const loginUser = (data) => {
    return new Promise((resolve, reject) => {
        userModel.findOne(data, '-_id -__v', (err, user) => {
            if(err){
                reject(err);
            } else {
                resolve(user);
            }
        })
    })
}

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        userModel.find({}, '-_id -__v', (err, users) => {
            if(err){
                reject(err);
            } else {
                resolve(users);
            }
        });
    });
}

const getUser = (email) => {
    return new Promise((resolve, reject) => {
        userModel.findOne({email}, '-_id -__v', (err, users) => {
            if(err){
                reject(err);
            } else {
                resolve(users);
            }
        });
    });
}

const getAllEvents = () => {
    return new Promise((resolve, reject) => {
        eventModel.find({}, '-_id -__v', (err, users) => {
            if(err){
                reject(err);
            } else {
                resolve(users);
            }
        });
    });
}

const getEvent = (eventId) => {
    return new Promise((resolve, reject) => {
        eventModel.findOne({eventId}, '-_id -__v', (err, users) => {
            if(err){
                reject(err);
            } else {
                resolve(users);
            }
        });
    });
}

const getAllEventRegistrations = () => {
    return new Promise((resolve, reject) => {
        eventRegistrationModel.find({}, '-_id -__v', (err, users) => {
            if(err){
                reject(err);
            } else {
                resolve(users);
            }
        });
    });
}

const getEventRegistration = (regId) => {
    return new Promise((resolve, reject) => {
        eventRegistrationModel.findOne({regId}, '-_id -__v', (err, users) => {
            if(err){
                reject(err);
            } else {
                resolve(users);
            }
        });
    });
}

module.exports = {
    loginUser,
    getAllUsers,
    getUser,
    getAllEvents,
    getEvent,
    getAllEventRegistrations,
    getEventRegistration
}