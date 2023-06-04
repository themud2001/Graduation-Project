const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");
const HttpError = require("../utils/HttpError");

module.exports.signIn = async (req, res, next) => {
    const bodyEmail = req.body.email;
    const password = req.body.password;
    const rememberMe = req.body.rememberMe;

    try {
        const user = await User.findOne({ where: { email: bodyEmail } });

        if (!user) {
            return next(new HttpError(404, ["Account not found"]));
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return next(new HttpError(401, ["Incorrect credentials"]));
        }

        const { firstName, lastName, email, phoneNumber } = user;
        const expiresIn = rememberMe ? process.env.JWT_EXPIRES_IN : "15m";
        const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn });

        res.status(200).json({ firstName, lastName, email, phoneNumber, token });
    } catch (error) {
        next(new HttpError(500, ["Server error"], error.message));
    }
};

module.exports.signUp = async (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    let password = req.body.password;

    try {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        await User.create({ firstName, lastName, email, phoneNumber, password });

        res.status(200).send();
    } catch (error) {
        next(new HttpError(409, ["Account already exists"]));
    }
};