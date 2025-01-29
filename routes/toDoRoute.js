const router = require("express").Router()
const toDoController = require("../controller/toDoController")

// All todo routes 
router.get("/notes",toDoController.allTodo);
router.post("/notes",toDoController.addToDo);
router.put("/notes/:id",toDoController.updateTodo);
router.delete("/notes/:id",toDoController.deleteTodo);


module.exports = router