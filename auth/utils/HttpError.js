class HttpError extends Error {
    constructor(code, message, logMessage=null) {
        super(message);

        this.code = code;
        this.message = message;
        this.logMessage = logMessage;
    }
}

module.exports = HttpError;