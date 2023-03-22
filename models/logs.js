const mongoose =require('mongoose')

const Schema = mongoose.Schema

const logSchema = new Schema({
    title: { 
        type: String,
        required: true
    },
    entry: { type: String, required: true},
    shipIsBroken: { type: Boolean, default: true, required: true}
}, { timestamps: true })

//const time = require('express-timestamp')
//app.use(time.init)
//https://www.npmjs.com/package/express-timestamp

// {timestamps: true} makes sure timestamps are created

//schema gives us model
//you interact with db through models

const Log = mongoose.model('log', logSchema)

//give blueprint as argument to access database
//schema uses pokemon model to interact with database

module.exports = Log