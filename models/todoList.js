//import mongoose library
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const toDoSchema = new mongoose.schema({
    name: {type:String, required:true}, 
    completed: {type:Boolean, required:true},
    dateCreated: {type: Date, default: Date.now,required:true}, 
    dateCompleted: {type: Date, default: Date.now, required:true},
    status: {type: String, default: 'incomplete', enum: ['incomplete', 'complete', 'deferred'], required:true}
})

//register model to collection
const listItem = mongoose.model("todo_list", toDoSchema);

//make our model accessible to outside files 
module.exports = listItem;