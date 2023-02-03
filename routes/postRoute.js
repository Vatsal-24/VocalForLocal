const express = require("express");
const postController = require("./../controllers/postController");
const router = express.Router();

router.route("/dalsAndPulses").post(postController.postDalAndPulses);
module.exports = router;
