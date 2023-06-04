const logger = require("../utils/logger");

module.exports = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    if (err.logMessage) {
        logger.error(err.logMessage);
    }

    logger.error(err.message);
    res.status(err.code).json({ errorMessage: err.message });
};