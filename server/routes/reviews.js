const express = require("express");
const router = express.Router();
const { isUserAuth } = require("../shared/auth");
const { justChecking, addReview, getAllReview, addActivity, getRevieById } = require("../controllers/review.server.controller")
const { addReviewToUser} = require("../controllers/user.server.controller")

router.get("/", getAllReview );

//addactivity for user as well
router.post("/addreview", isUserAuth, addReview, addReviewToUser, addActivity );
router.get("/review/:id", getRevieById)


module.exports = router;
