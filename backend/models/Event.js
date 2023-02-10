const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    when: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
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