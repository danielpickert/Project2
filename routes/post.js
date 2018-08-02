const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");

// `/post`
router.post("/", postController.requireAuth, postController.create);
router.get("/new", postController.requireAuth, postController.new);
router.get("/:id", postController.show);
router.put("/:id", postController.update);
router.delete("/:id", postController.destroy);

module.exports = router;
