const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comments-controller");

router.post("/:id", commentController.addcomment);

module.exports = router;
