const logger = require("../utils/logger");

module.exports = (req, res, next) => {
    logger.info(`${req.method} ${req.url} from IP: ${req.ip}`);
    next();
};