const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
const Admin = require('../models/Admin')
const Event = require('../models/Event')
const Student = require('../models/Student')
const Request = require('../models/Request')
const Schedule = require('../models/Schedule')

// admin: 5deba6ae484c2fa98f58e4b0df0dd7fecfd9f7dd9a4a9f9b4739d8e1389915bd826442a81312ac3228ecc83120
// student: 49afe28d956804de0fde8f7bcabd749f495193c53fc5d802355c96ad6f3f46c37e72d18b9830d61de80c7b01f9

router.get('/initialization/private/administrator', async (req, res) => {
    const admin_exists = await Admin.exists({ username : 'icct' })
    if (admin_exists) return res.json({ err: 'Admin exists in database' })

    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err
        bcrypt.hash('icct', salt, (err, password) => {
            if (err) throw err
            const admin = new Admin({
                username: 'icct',
                name: 'ICCT Colleges',
                password,
                profile_pic: 'https://amyfoundationph.com/home/wp-content/uploads/2022/07/icct.gif',
                role: '5deba6ae484c2fa98f58e4b0df0dd7fecfd9f7dd9a4a9f9b4739d8e1389915bd826442a81312ac3228ecc83120'
            })
            admin.save()
            return res.json({ msg: 'Admin registered' })
        })
    })
})

// LOGIN
router.post('/login', async (req, res) => {
    const isInAdmin = await Admin.exists({ username: req.body.username })

    if(isInAdmin){
        const user = await Admin.findOne({ username: req.body.username })

        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) throw err
            if (!result) return res.json({ err: 'Wrong password' })

            const token = jwt.sign({ ...user }, process.env.JWT_SECRET)
            return res.json({ authToken: token })
        })
    }

    const isInStudent = await Student.exists({ student_username: req.body.username })

    if (isInStudent){
        const user = await Student.findOne({ student_username: req.body.username })

        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) throw err
            if (!result) return res.json({ err: 'Wrong password' })

            const token = jwt.sign({ ...user }, process.env.JWT_SECRET)
            return res.json({ authToken: token })
        })
    }
})

// HOMEPAGE
router.post('/', (req, res) => {
    jwt.verify(req.body.token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) throw err
        return res.json(decoded._doc)
    })
})

// DASHBOARD

// ADMIN: ADD STUDENT

router.post('/dashboard/student/add', async (req, res) => { // going to student collection
    const student_id_exists = await Student.exists({ student_id: req.body.student_id })
    const student_uname_exists = await Student.exists({ student_username: req.body.student_username })

    if (student_id_exists || student_uname_exists){
        return res.json({ err: 'Student already exists in database' })
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) res.json({ err: 'Password secret generation error'})
        bcrypt.hash(req.body.password, salt, (err, password) => {
            if (err) res.json({ err: 'Password generation error'})
            const student = new Student({ ...req.body, password })
            student.save()

            return res.json({ msg: `Student ${req.body.student_id} added` })
        })
    })
})

router.patch('/dashboard/student/edit', async (req, res) => {
    await Student.findOneAndUpdate({ _id: req.body._id }, { ...req.body })

    return res.json({ msg: `Student ${req.body.student_id} updated` })
})

// ADMIN: ADD EVENT
router.post('/dashboard/event/add', async (req, res) => { // going to event collection
    const event = new Event({ ...req.body })
    event.save()

    return res.json({ msg: `Event ${req.body.title} added` })
})

// FETCHES ALL
router.get('/dashboard/all', async (req, res) => {
    const students = await Student.find({})
    const events = await Event.find({})
    const requests = await Request.find({})
    const schedules = await Schedule.find({})

    return res.status(200).set('Access-Control-Allow-Origin', 'http://127.0.0.1:5173').json({ students, events, requests, schedules })
})

// ADMIN: FETCHES STUDENTS
router.delete('/dashboard/student/edit', async (req, res) => {
    await Student.findOneAndDelete({ _id: req.body.id })
    await Schedule.deleteMany({ from_id: req.body.id })
    await Request.deleteMany({ from_id: req.body.id })
    return res.json({ msg: `Deleted ${req.body.id}` })
})

// REQUEST: FETCHES INDIVIDUAL STUDENT OWN REQUEST TICKET BY ID
router.get('/dashboard/student/:id', async (req, res) => {
    const { id } = req.params
    const requests = await Request.find({ from_id: id})
    const schedules = await Schedule.find({ from_id: id})

    return res.json({ requests, schedules })
})

// STUDENT: ADD REQUEST
router.post('/dashboard/request/add', async (req, res) => {
    const request = new Request({ ...req.body })
    request.save()

    return res.json({ msg: `Request has been sent` })
})

router.get('/dashboard/student', async (req, res) => {
    const students = await Student.find({})
    
    return res.json({ students })
})

router.get(`/dashboard/request`, async (req, res) => {
    const requests = await Request.find({})

    return res.json({ requests })
})

router.get(`/dashboard/schedule`, async (req, res) => {
    const schedules = await Schedule.find({})

    return res.json({ schedules })
})
router.get(`/dashboard/event`, async (req, res) => {
    const events = await Event.find({})

    return res.json({ events })
})

router.delete('/dashboard/request', async (req, res) => {
    await Request.findByIdAndDelete({ _id: req.body._id})
    return res.json({ err: `Deleted ${req.body._id}`})
})

// ADMIN: To schedule collection
router.post('/dashboard/schedule', async (req, res) => {
    const sched = await Schedule({ ...req.body })
    sched.save()

    return res.json({ msg: 'Schedule added'})
})

router.patch('/dashboard/schedule', async (req, res) => {
    await Schedule.findOneAndUpdate({ _id: req.body.id }, { req_status: req.body.status})

    return res.json({ msg: `Request ${req.body.id} has been set to done` })
})

module.exports = router