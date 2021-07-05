const express = require("express");
const router = express.Router();
const { isUserAuth } = require("../shared/auth");
const {signIn, signUp, justChecking, getProfile, getUserNames, updateProfile, basicInfoUserById} = require("../controllers/user.server.controller")
const {getAllReviewByUser} = require("../controllers/review.server.controller")

router.get("/", isUserAuth, justChecking)

router.post( "/login",signIn );

router.post("/signup", signUp);

router.get("/profile/:username",isUserAuth, getProfile);

router.post("/getnames", isUserAuth, getUserNames );

router.post("/profileupdate", isUserAuth, updateProfile);

router.get("/:id/reviews", isUserAuth, basicInfoUserById, getAllReviewByUser);


module.exports = router;
