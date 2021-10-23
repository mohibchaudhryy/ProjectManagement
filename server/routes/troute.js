import express from "express";
const router = express.Router();

import { createTask, allTasks, taskUpdatecTime, updateTask } from "../controllers/tasks.js";

router.post("/createtask", createTask);
router.get("/alltasks", allTasks);
router.patch("/completetask/:id", taskUpdatecTime);
router.patch("/updatetask", updateTask);




export default router;