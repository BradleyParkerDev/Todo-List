const ListItem = require('../models/TodoList');

///////////////////////////////////////////////////////////////////////////
//Create
///////////////////////////////////////////////////////////////////////////

//Create One
async function createTask(req, res, next) {
  try {
    //parse out fields from POST request
    const name  = req.body.name ;
    const description = req.body.description;

    //pass fields to new ListItem model 
    //notice how it's way more organized and does the type checking for us
    const newListItem = new ListItem({
        name,
        description
    });

    //save our new entry to the database 
    const savedData =  await newListItem.save();
    
    //return the successful request to the user 
    res.json({
        success: true,
        listItem: savedData
    });

  } catch (e) {
    console.log(typeof e);
    console.log(e);
    res.json({
      error: e.toString(),
    });
  }
}

//Create Multiple Tasks
async function createMultipleTasks(req,res){
  try{

    const multipleListItems = req.body;
    const savedData = await ListItem.create(multipleListItems); 
    
    //return the successful request to the user 
    res.json({
      success: true,
      listItem: savedData
    }); 
  }catch(e){
    console.log(typeof e);
    console.log(e);
    res.json({
      error: e.toString(),
    });
  }
}

///////////////////////////////////////////////////////////////////////////
//Read
///////////////////////////////////////////////////////////////////////////

//Read All
async function getAllTasks(req, res){
  //query todo list
  try {
    const listItems = await ListItem.find({});
    res.json({listItems: listItems });
  }catch(e){
        console.log(e);
  }
}

//Read One
async function getOneTask(req, res){

  //query todo list
  try {
    const listItem = await ListItem.find({name:req.params.name}).exec();
    
    console.log(listItem)
    res.json({success: true, listItem: listItem });
  }catch(e){
    console.log(e);
  }
}


///////////////////////////////////////////////////////////////////////////
//Update
///////////////////////////////////////////////////////////////////////////

//Update One
async function updateOneTask(req,res){
  try {
    const updates = {
      status: req.body.status

    }
    if(req.body.status === "complete"){
      updates.dateCompleted = Date.now();
      updates.completed = true;
    }

    await ListItem.updateOne({ name:req.params.name }, updates);
    res.json({success: true, updates: res.body});

  }catch(e){
    console.log(e);

  }
}


///////////////////////////////////////////////////////////////////////////
//Delete
///////////////////////////////////////////////////////////////////////////

//Delete One
async function deleteOneTask(req,res){
  try {
      await ListItem.deleteOne({name:req.params.name});
  } catch (err) {
      console.log(err);
      throw err;  
  }

  res.json({
      success: true,
      message: `List item deleted.`
  })
}

//Delete Multiple
async function deleteMultipleTasks(req,res){
  try{
    const namesToDelete = req.body
    if (namesToDelete.length < 1){
      throw Error("names to delete empty!");
    }
    await ListItem.deleteMany({
      name: {
        $in: namesToDelete
      }
    });
  }catch(err){
    console.log(err);
    throw err;
  }

  res.json({
    success: true,
    message: 'List items deleted'
  })

}

  module.exports = {
    createTask,
    createMultipleTasks,
    getAllTasks,
    getOneTask,
    updateOneTask,
    deleteOneTask,
    deleteMultipleTasks
  };