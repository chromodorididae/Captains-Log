const express = require('express');

const router = express.Router();


const logController = require('../controllers/logController');

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show
// router.get('/', logController.index);

router.get('/', logController.index);
/* router.get('/', (req, res) => {
    res.render('Index')
}); */


// Setup a "new" route for creating logs
// router.get('/new', logController.new)
router.get('/new', (req, res) => {
    res.render('New')
}) //New: step 13 - MOVE TO SERVER?

// Setup a "clear" route for removing all data from logs collection
router.delete('/clear', logController.clear)

// Setup a "delete" route for removing a specific logs
router.delete('/:id', logController.delete)

// Setup a "update" route for updating a specific logs
router.put('/:id', logController.update)

// Setup a "seed" route for repopulating our database
router.post('/seed', logController.seed)

// Setup a "create" route for adding logs data
router.post('/', logController.create)

// Setup a "edit" route for editing a logs
router.get('/:id/edit', logController.edit)

// Setup an "show" route for logs, attach it to router along with the controller logic
router.get('/:id', logController.show)


module.exports = router