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
        blogs: savedData
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
    const listItems = await ListItem.find({name:req.params.name});
    res.json({listItems: listItems });
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

//Update Many



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
//Delete Multiple Tasks

// // router.delete('/delete-multi', async function (req, res) {
// // 	try {
      
// //       const idsToDelete = req.body

// //       if (idsToDelete.length < 1){
// //         throw Error("ids to delete empty!");
// //       }
// //       const deleteResult = await db().collection("sample_blogs").deleteMany({
// //         id: {
// //           $in: idsToDelete
// //         }
// //       })
  
// //   } catch (e) {
// //     res.send(e);
// //   }
// // 	res.json({
// // 		success: true,
// // 		deleteResult: deleteResult
// // 	})
// // })



  module.exports = {
    createTask,
    getAllTasks,
    getOneTask,
    updateOneTask,
    deleteOneTask
  };