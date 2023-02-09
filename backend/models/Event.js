const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    when: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    campus: {
        type: String,
        required: true
    }, 
    created_at: {
        type: Number,
        default: Date.now()
    }
})

const Event = mongoose.model('Event', EventSchema)

module.exports = Event