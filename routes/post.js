const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");

router.post("/", postController.requireAuth, postController.create);
router.get("/new", postController.requireAuth, postController.new);
router.get("/:id", postController.show);
router.put("/:id", postController.requireAuth, postController.update);

module.exports = router;
