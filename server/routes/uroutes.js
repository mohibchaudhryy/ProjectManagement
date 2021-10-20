import express from "express";
const router = express.Router();

import { signin, createUser, allUsers, updateUser } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/createuser", createUser);
router.get("/allregularusers", allUsers);
router.get("/allregularusers", allUsers);
router.patch("/updateuser", updateUser)
export default router;