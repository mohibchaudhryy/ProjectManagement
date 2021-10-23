import express from "express";
const router = express.Router();

import { createProject, allProjects, allocateProject, allAllocatedProjects } from "../controllers/projects.js";

router.post("/createproject", createProject);
router.get("/allprojects", allProjects);
router.patch("/allocateproject/:id", allocateProject);
router.get("/allallocatedprojects/:id", allAllocatedProjects);
export default router;