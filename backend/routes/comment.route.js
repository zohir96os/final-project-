import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  creatComment,
  getPostComment,
  likeComment,
  editComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", verifyToken, creatComment);
router.get("/getPostComments/:postId", getPostComment);
router.put("/likeComment/:commentId", verifyToken, likeComment);
router.put("/editComment/:commentId", verifyToken, editComment);

export default router;
