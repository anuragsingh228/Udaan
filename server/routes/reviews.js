const express = require("express");
const router = express.Router();
const { isUserAuth } = require("../shared/auth");
const { justChecking, addReview, getAllReview, addActivity } = require("../controllers/review.server.controller")


router.get("/", getAllReview );

//addactivity for user as well
router.post("/addreview", isUserAuth, addReview, addActivity );


module.exports = router;
