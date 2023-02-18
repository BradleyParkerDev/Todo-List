const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router();


const todoListController = require('../controllers/todoListController');

//create 
router.post("/create-task", todoListController.createTask);
router.post("/create-multi", todoListController.createMultipleTasks);

//Read
router.get("/all", todoListController.getAllTasks);
router.get("/get-one/:name", todoListController.getOneTask);

//Update
router.put("/update-task/:name",todoListController.updateOneTask);

//Delete
router.delete("/delete-one/:name", todoListController.deleteOneTask);
router.delete("/delete-multi/", todoListController.deleteMultipleTasks);






module.exports = router;
