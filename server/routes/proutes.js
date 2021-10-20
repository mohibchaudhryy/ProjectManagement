import express from "express";
const router = express.Router();

import { createProject, allProjects } from "../controllers/projects.js";

router.post("/createproject", createProject);
router.get("/allprojects", allProjects);

export default router;