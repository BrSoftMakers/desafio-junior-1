import { Router } from "express";
import { UserController } from "../controllers/User.controller";

const routerUser= Router()
const userController = new UserController()

routerUser.post("/register" , userController.createUser)
routerUser.get("/getUser" , userController.getUser)
routerUser.get("/getUserById/:idUser" , userController.getUserById)
routerUser.delete("/getUser/:idUser" , userController.deleteUserById)

export default routerUser

