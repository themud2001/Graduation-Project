const router = require("express").Router();

const { signInValidation, signUpValidation, verifyTokenValidation } = require("../middlewares/authValidation");
const { signIn, signUp, verifyToken } = require("../controllers/authController");

router.post("/signin", signInValidation, signIn);
router.post("/signup", signUpValidation, signUp);
router.get("/verify-token", verifyTokenValidation, verifyToken);

module.exports = router;