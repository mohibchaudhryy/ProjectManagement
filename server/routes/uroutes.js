import express from "express";
const router = express.Router();

import { signin, createUser } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/createUser", createUser);

export default router;