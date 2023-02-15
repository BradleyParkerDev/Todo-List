# Todo-List

Create an new project called todo-list using the command:


npx express-generator -e 

Required Functionality (Routes): 


1. Create Task
2. Update Task (Mark as Completed/ Uncompleted)
3. Delete Task 
4. Delete Multipl Tasks 
5. Create Muliple Tasks
6. Display all Tasks 

Create a new mongoose schema toDoSchema, it should have the following properties:

name - type: string, validation: required
description - type: string
completed - type: boolean, validation: required
dateCreated - type: date, default: Date.now(), validation: required
dateCompleted - type: date
status - type: string, default: 'incomplete', validation: required, enum: ['incomplete', 'complete', 'deferred']


Other notes: 

1. use model/view/controller paradigm to organize your files (look at ExpressBloggerFinal on the mongoose branch)

2. If you feel that there are any other features that can be useful, add them!  

NPM Packages to install: 

- express 
- mongoose
- dotenv
- uuid 
- nodemon

(should be installed automatically)
- cookie-parser
- debug
- ejs
- http-errors
- morgan
