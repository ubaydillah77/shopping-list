//Item Model
const Items = require('../models/itemModel');

//@route GET /api/items
//@desc get all items
//@acces public
exports.getAllItem = (req, res) => {
  Items.find()
    .sort({ Date: -1 })
    .then((items) => res.json(items));
};

//@route POST /api/items
//@desc create new item
//@acces public
exports.createItem = (req, res) => {
  const newItem = new Items({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
};

//@route DELETE /api/items/:id
//@desc delete items
//@acces public
exports.deleteItem = (req, res) => {
  Items.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ succes: true })))
    .catch((err) => res.status(404).json({ succes: false }));
};
