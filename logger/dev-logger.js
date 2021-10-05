devconst { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

// level 5
function buildDevLogger() {
    const logFormat2 = printf(({ level, message, timestamp, stack }) => {
        return `${timestamp} ${level}: ${stack || message}`;
    });
    return createLogger({
        format: combine(
          format.colorize(),
          timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
          format.errors({ stack: true }),
          logFormat2
        ),
        defaultMeta: { service: 'user-service' },
        transports: [new transports.Console()],
    });

}
module.exports = buildDevLogger;
