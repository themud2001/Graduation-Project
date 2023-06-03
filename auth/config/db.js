const { Sequelize } = require("sequelize");

const logger = require("../utils/logger");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false
});

const databaseConnect = async () => {
    try {
        await sequelize.authenticate();
        logger.info("Database connection has ben established successfully");
    } catch (error) {
        logger.error("Unable to connect to the database");
        logger.error(error);
    }
};

module.exports.sequelize = sequelize;
module.exports.databaseConnect = databaseConnect;