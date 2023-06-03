const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./.env" });

const app = express();

const logger = require("./utils/logger");
const httpLogger = require("./middlewares/httpLogger");
const { databaseConnect } = require("./config/db");
const syncDatabase = require("./config/syncDatabase");

databaseConnect();
syncDatabase();

const authRoutes = require("./routes/auth");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());

app.use(httpLogger);
app.use("/auth", authRoutes);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    logger.info(`Server is listening on port ${process.env.PORT}`);
});