require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes/routes')

app.use(cors())

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI)
// mongoose.connect('mongodb://127.0.0.1:27017/rebuild1')
    .then(() => console.log('Database online'))
    .catch(error => console.log(error))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

// app.get('/', (req, res) => {
//     res.send('Success')
// })

app.listen(process.env.PORT, process.env.HOST_NAME, console.log(`Server running on ${process.env.HOST_NAME} ${process.env.PORT}`))