import express from "express";
import {postJob, getJobs, getJobById, getAdminJobs} from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";


const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);
router.route("/adminjobs").get(isAuthenticated, getAdminJobs);

export default router;