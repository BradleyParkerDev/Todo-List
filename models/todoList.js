//import mongoose library
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const toDoSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type: String}, 
    completed: {type:Boolean, default:false,required:true},
    dateCreated: {type: Date, default: Date.now,required:true}, 
    dateCompleted: {type: Date},
    status: {type: String, default: 'incomplete', enum: ['incomplete', 'complete', 'deferred'], required:true}
})

//register model to collection
const ListItem = mongoose.model("list_item", toDoSchema);

//make our model accessible to outside files 
module.exports = ListItem;