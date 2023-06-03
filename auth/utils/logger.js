const { format, createLogger, transports } = require("winston");
require("winston-daily-rotate-file");

const { combine, timestamp, printf } = format;
const customFormat = printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`);

const errorsDailyTransport = new transports.DailyRotateFile({
    filename: `${process.env.LOGS_PATH_ERRORS}/%DATE%.log`,
    datePattern: "YYYY-MM-DD",
    maxFiles: "30d",
    level: "error"
});

const infoDailyTransport = new transports.DailyRotateFile({
    filename: `${process.env.LOGS_PATH_INFO}/%DATE%.log`,
    datePattern: "YYYY-MM-DD",
    maxFiles: "30d",
    level: "info"
});

const logger = createLogger({
    format: combine(
        timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        customFormat
    ),
    transports: [
        errorsDailyTransport,
        infoDailyTransport,
        new transports.Console()
    ]
});

module.exports = logger;