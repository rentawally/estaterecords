const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Items');

// @route GET api/items
router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

// Post request go here 

// Delete request go here

module.exports = router;