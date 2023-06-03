const router = require("express").Router();

const { signInValidation, signUpValidation } = require("../middlewares/authValidation");
const { signIn, signUp } = require("../controllers/authController");

router.post("/signin", signInValidation, signIn);
router.post("/signup", signUpValidation, signUp);

module.exports = router;