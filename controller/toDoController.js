const models = require('../models/index')
const Sequelize = require("sequelize");

const toDo = models.Todo;

// To get all todos 
module.exports.allTodo= (req, res) => {
    toDo.findAll()
        .then((allTodoData) => {
            return res.json(allTodoData)
        })
        .catch((err) => {
            return res.json(err)
        })
}
// To create new todos 
module.exports.addToDo = (req, res) => {
    const toDoTitle=req.body.title;
    const description=req.body.description;
    if(toDoTitle==undefined || toDoTitle==null){
        return res.status(400).json({
            messege:"title is required"
        })   
    }
    const todoData={
        title:toDoTitle,
        description:description
    }
    toDo.create(todoData).then((data) => {
            return res.json(data)   
     })
     .catch((err) => {
        return res.json(err)
    })
    
}

// To update toDo
module.exports.updateTodo = (req, res) => {
    const id=  req.params.id;
    const toDoTitle=req.body.title;
    const description=req.body.description
    toDo.update(req.body,{where:{id: parseInt(id)}}).then((data) => {
        if(data==1){
            return res.json({
                messege:"Note updated sucessfully"
            })
        }   
        else{
            return res.json({
                messege:"invalid id"
            })
        }  
    })
    .catch((err) => {
        return res.json(err)
    })
    
}


// To delete todo 
module.exports.deleteTodo = (req, res) => {
    const id=  req.params.id;
    toDo.destroy({where:{id: parseInt(id)}}).then((data) => {
        if(data==1){
            return res.json({
                messege:"Note deleted sucessfully"
            })
        }   
        else{
            return res.json({
                messege:"data not found or already deleted"
            })
        }  }
    )
    .catch((err) => {
        return res.json(err)
    })
    
} 