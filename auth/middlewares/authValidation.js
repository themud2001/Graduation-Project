const { body, validationResult } = require("express-validator");
const HttpError = require("../utils/HttpError");

module.exports.signInValidation = async (req, res, next) => {
    await body("email")
        .escape()
        .trim()
        .notEmpty()
        .withMessage("Invalid E-mail")
        .bail()
        .toLowerCase()
        .isEmail()
        .withMessage("Invalid E-mail format!")
        .bail()
        .run(req);
    
    await body("password")
        .escape()
        .trim()
        .notEmpty()
        .withMessage("Invalid Password")
        .run(req)

    const result = validationResult(req);
    const errorsArray = result
        .formatWith(error => error.msg)
        .array();


    if (!result.isEmpty()) {
        return next(new HttpError(400, errorsArray));
    }

    next();
};

module.exports.signUpValidation = async (req, res, next) => {
    await body("firstName", "Invalid first name")
        .escape()
        .trim()
        .notEmpty()
        .run(req);
    
    await body("lastName", "Invalid last name")
        .escape()
        .trim()
        .notEmpty()
        .run(req);

    await body("email")
        .escape()
        .trim()
        .notEmpty()
        .withMessage("Invalid E-mail")
        .bail()
        .toLowerCase()
        .isEmail()
        .withMessage("Invalid E-mail format")
        .run(req);

    await body("phoneNumber", "Invalid phone number")
        .escape()
        .trim()
        .notEmpty()
        .bail()
        .isLength({ min: 10 })
        .run(req);
    
    await body("password")
        .escape()
        .trim()
        .notEmpty()
        .withMessage("Invalid Password")
        .bail()
        .isLength({ min: 6 })
        .withMessage("Password must be 6 characters or longer")
        .run(req)
    
    await body("confirmPassword", "Invalid confirm password")
        .if((value, { req }) => req.body.password)
        .escape()
        .trim()
        .notEmpty()
        .bail()
        .equals(req.body.password)
        .run(req)

    const result = validationResult(req);
    const errorsArray = result
        .formatWith(error => error.msg)
        .array();


    if (!result.isEmpty()) {
        return next(new HttpError(400, errorsArray));
    }

    next();
};