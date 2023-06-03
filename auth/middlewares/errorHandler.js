const logger = require("../utils/logger");

module.exports = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    logger.error(err.message);
    res.status(err.code).json({ errorMessage: err.message });
};