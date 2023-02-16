require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes/routes')

mongoose.set('strictQuery', true)
// mongoose.connect('mongodb+srv://melvinaxium:asteriskisrisk@cluster0.01ycm9k.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb://127.0.0.1:27017/rebuild1')
    .then(() => console.log('Database online'))
    .catch(error => console.log(error))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.listen(process.env.PORT, console.log('Server running'))