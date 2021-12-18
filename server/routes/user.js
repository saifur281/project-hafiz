import express from "express";
const router = express.Router();

import {
  signin,
  signup,
  fetchUser,
  updateUser,
  getSingleUser,
} from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);

router.get("/", fetchUser);
router.get("/single/:id", getSingleUser);

router.patch("/:id", updateUser);

export default router;
