const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");
const commentController = require("../controllers/comments-controller");

// `/post`
router.post("/", postController.requireAuth, postController.create);
router.get("/new", postController.requireAuth, postController.new);
router.get("/:id", postController.show);
router.put("/:id", postController.update);
router.delete("/:id", postController.destroy);
router.post("/:id/comments", commentController.addcomment);

module.exports = router;
