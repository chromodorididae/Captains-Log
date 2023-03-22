//controller here
//server => routes => controllers => views

const Log = require('../models/logs')

// Load the pokemon model
const logsArray = require('../models/logsArray')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {

    try {
        // Use the pokemon model to interact with the database
        // find will get all documents from the pokemon collection
        const logs = await Log.find() 
        console.log('inside controller')

        // Looks in the views folder for "pokemon/Index" and passes { pokemon } data to the view (kind of like a server props object)
        // res.render('pokemon/Index', { pokemon })
        res.render('Index', { logs })

        // res.render('Index')

    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// Those anonymous callback functions now have names: "index" (above) and "show" (below)
module.exports.show = async (req, res) => {
    try {
        const log = await Log.findById(req.params.id)
        const date = log.createdAt.toDateString().slice(0, 15)
        // res.render('log/Show', { log })
        res.render('Show', { log, date })

    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// // GET /pokemon/new
// module.exports.new = (req, res) => {
//     res.render('New')
//     //res.render('./views/pokemon/New')
// }

// POST /pokemon
// update a pokemon
module.exports.create = async (req, res) => {
    
//if present, update the pokemon
    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
// otherwise, create a new pokemon
    try {
        // use the model to interact with db and create a new document in the pokemon collection
        const result = await Log.create(req.body)
        console.log(result)
    } catch(err) {
        console.log(err)
    }
    
    res.redirect('/logs')
}

// DELETE /pokemon/:id
// delete a pokemon from the database
module.exports.delete = async (req, res) => {
  
    try {
        await Log.findByIdAndDelete(req.params.id)
        res.redirect('/logs')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
} 

// GET /pokemon/:name/edit
// edit a pokemon
module.exports.edit = async (req, res) => {
  
    try {
        const log = await Log.findById(req.params.id)
        // res.render('pokemon/Edit', { pokemon })
        res.render('Edit', { log })

    } catch(err) {
        console.log(err)
        res.send(err.message)
    }    
}

// PUT /pokemon/:id
//update a pokemon
module.exports.update = async (req, res) => {
 
    console.log(req.body)

    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

   try {
        // pass the id to find the document in the db and the form data (req.body) to update it
        await Log.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/logs/${req.params.id}`)
   } catch(err) {
        console.log(err)
        res.send(err.message)
   }
}

// POST /pokemon/seed
// seed the database
module.exports.seed = async (req, res) => {

    try {
        await Log.deleteMany({})
        await Log.create(logsArray)
        res.redirect('/logs')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

//FROM SERVER:
// app.get("/seed", async(req, res) => {
//     try {
//         await Pokemon.deleteMany({})
//         await Pokemon.create(pokemonData)
//         res.redirect('/pokemon')
//         //pass pokemon data array
//     } catch(err) {
//         console.log(err)
//         res.send(err.message)
//     }
// })

// DELETE /pokemon/clear
// clear the database
module.exports.clear = async (req, res) => {

    try {
        await Log.deleteMany({})
        res.redirect('/logs')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}