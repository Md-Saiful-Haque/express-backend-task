import { Router, type Request, type Response } from "express";
import { pool } from "../../db";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";
import { USER_ROLES } from "../../types";

const router = Router();


router.post("/", userController.createUser)

router.get("/", auth(USER_ROLES.admin, USER_ROLES.agent), userController.getAlluser)

router.get("/:id", userController.getSingleUser)

router.put("/:id", userController.updateUser)

router.delete("/:id", userController.deleteUser);

export const userRoute = router