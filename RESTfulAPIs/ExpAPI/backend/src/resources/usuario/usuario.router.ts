import { Router } from "express";
import userController from "./usuario.controller";

const userRouter = Router();

userRouter.get("/", userController.index);
userRouter.post("/", userController.create);
userRouter.get("/:id", userController.read);
userRouter.patch("/:id", userController.update);
userRouter.delete("/:id", userController.remove);

export default userRouter;
