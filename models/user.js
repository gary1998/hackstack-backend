const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    collection: 'users'
})

const userModel = mongoose.model('user', userSchema);

module.exports = {
    userModel,
    userSchema
}