const mongoose = require('mongoose')

const RequestSchema = new mongoose.Schema({
    req_type: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    pref_date: {
        type: String,
        required: true
    },
    from_id: {
        type: String,
        required: true
    },
    from_fname: {
        type: String,
        required: true
    },
    from_lname: {
        type: String,
        required: true
    },
    from_branch: {
        type: String,
        required: true
    },
    req_status: {
        type: String,
        required: true
    },
    year_level: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    created_at: {
        type: Number,
        default: Date.now()
    }
})

const Request = mongoose.model('Request', RequestSchema)

module.exports = Request