const { Router } = require("express")
const usersRoutes = Router()

function myMiddleware(req, res, next) {
  console.log("Você passou pelo middleware")

  next();
}

const UsersController = require("../controllers/UsersController")

const usersController = new UsersController()

usersRoutes.post("/", myMiddleware, usersController.create)
usersRoutes.put("/:id", usersController.update)


module.exports = usersRoutes