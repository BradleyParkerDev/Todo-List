const express = require('express');
const router = express.Router();
const ListItem = require('../models/TodoList');

/* GET home page. */
router.get('/', async function(req, res) {

  //query blogs 
  try {
    const listItems = await ListItem.find({});
    res.json({listItems: listItems });
  }catch(e){
    console.log(e);
  }
});





module.exports = router;
