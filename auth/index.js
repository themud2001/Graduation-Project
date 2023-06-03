const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const app = express();

const logger = require("./utils/logger");
const httpLogger = require("./middlewares/httpLogger");
const { databaseConnect } = require("./config/db");
const syncDatabase = require("./config/syncDatabase");

databaseConnect();
syncDatabase();
app.use(httpLogger);

app.listen(process.env.PORT, () => {
    logger.info(`Server is listening on port ${process.env.PORT}`);
});