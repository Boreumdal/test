const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    student_id: {
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
    branch: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    },
    student_username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Number,
        default: Date.now()
    }
})

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student