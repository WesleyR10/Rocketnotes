const { Router } = require("express")
const notesRoutes = Router()

const NotesController = require("../controllers/NotesController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated) // aplicando o middleware para todas as rotas abaixo

notesRoutes.get("/", notesController.index)
notesRoutes.post("/", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes;