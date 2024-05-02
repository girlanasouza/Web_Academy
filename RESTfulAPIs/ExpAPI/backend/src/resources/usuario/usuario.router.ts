import { Router } from "express";
import userController from "./usuario.controller";


const userRouter = Router();

userRouter.get("/", userController.index);
userRouter.post("/", userController.create);
userRouter.get("/:id", userController.read);
userRouter.patch("/", userController.update);
userRouter.delete("/", userController.remove);


export default userRouter;