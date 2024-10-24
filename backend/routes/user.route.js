import express from "express";
import { login, logout, register, updateprofile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").put(isAuthenticated,updateprofile);
router.route("/logout").get(logout);

export default router;