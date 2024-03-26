import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { creatComment } from "../controllers/comment.controller.js";
import { getPostComment } from "../controllers/comment.controller.js";
import { likeComment } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", verifyToken, creatComment);
router.get("/getPostComments/:postId", getPostComment);
router.put("/likeComment/:commentId", verifyToken, likeComment);

export default router;
