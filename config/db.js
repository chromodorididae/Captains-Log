//require mongoose
const mongoose = require('mongoose')
//save imported data as string with db variable
const db = process.env.Mongo_URI

// console.log(db)

//asynchronous function with try catch
//catch errors with error msg

//this async function calls to the database
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
//line 13 gets rid of automatic deprecation warning
        })
        //then...test connection
        console.log('Mongoose connected...')
        //add catch next
    } catch (err) {
        console.error(err.message)
    }
}

//connect() method connects to connection string
//db is called - it holds connection string
//open object after db, with {

//lastly, export and/to call this in server.js
module.exports = connectDB;