import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  creatComment,
  getPostComment,
  likeComment,
  editComment,
  deleteComment,
  getComments,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", verifyToken, creatComment);
router.get("/getPostComments/:postId", getPostComment);
router.get("/getcomments", verifyToken, getComments);
router.put("/likeComment/:commentId", verifyToken, likeComment);
router.put("/editComment/:commentId", verifyToken, editComment);
router.delete("/deleteComment/:commentId", verifyToken, deleteComment);

export default router;
