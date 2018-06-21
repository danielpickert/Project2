const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");



router.post("/", postController.create);
router.get("/new", postController.new);
// router.get("/:id", postController.show);
// router.put("/:id", postController.update);

module.exports = router;
