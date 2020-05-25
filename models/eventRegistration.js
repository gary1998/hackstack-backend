const mongoose = require('mongoose')
const validator = require('validator')

const eventRegistrationSchema = new mongoose.Schema({
    registeredName: {
        type: String,
        trim: true,
        required: true,
    },
    registeredPhone: {
        type: String,
        trim: true,
        required: true,
        maxlength: 10
    },
    registeredEmail: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    registeredIDCard: {
        type: Buffer,
        required: true
    },
    eventId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["Self", "Group", "Corporate", "Others"],
        required: true
    },
    ticketCount: {
        type: Number,
        required: true,
    },
    regId: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
}, {
    collection: 'eventRegistrations'
})

const eventRegistrationModel = mongoose.model('eventRegistrations', eventRegistrationSchema);

module.exports = {
    eventRegistrationModel,
    eventRegistrationSchema
}