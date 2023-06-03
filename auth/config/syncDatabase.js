const logger = require("../utils/logger");
const WaterStation = require("../models/WaterStation");
const User = require("../models/User");

module.exports = async () => {
    try {
        await WaterStation.sync();
        await User.sync();
        
        logger.info("Synchronized the database!");
    } catch (error) {
        logger.error("Failed to synchronize: ");
        logger.error(error);
    }
};