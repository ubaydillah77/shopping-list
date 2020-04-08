const express = require('express');
const router = express.Router();
const itemController = require('../../controller/itemController');

// home route
router
  .route('/')
  .get(itemController.getAllItem)
  .post(itemController.createItem);

router.route('/:id').delete(itemController.deleteItem);
module.exports = router;
