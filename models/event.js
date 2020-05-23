const mongoose = require('mongoose')
const validator = require('validator')

const eventSchema = new mongoose.Schema({
    eventDate: {
        type: Date,
        trim: true,
        required: true,
    },
    eventLocation: {
        type: String,
        trim: true,
        required: true
    },
    eventEmail: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    eventHelpline: {
        type: Number,
        required: false,
        maxlength: 10
    },
    totalTickets: {
        type: Number,
        required: true
    },
    eventId: {
        type: String,
        trim: true,
        required: true,
        index: true,
        unique: true
    }
}, {
    collection: 'event'
})

const eventModel = mongoose.model('event', eventSchema);

module.exports = {
    eventModel,
    eventSchema
}