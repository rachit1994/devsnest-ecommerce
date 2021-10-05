const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const logger_level_1 = createLogger({
  // level: 'debug', un-comment this to show debug
  format: format.simple(),
  transports: [new transports.Console()],
});

// level 2
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger_level_2 = createLogger({
  format: combine(timestamp(), logFormat),
  transports: [new transports.Console()],
});

//  level 3
const logger_level_3 = createLogger({
  format: combine(timestamp({ format: "DD-MM-YYYY HH:mm:ss" }), logFormat),
  transports: [new transports.Console()],
});

// level 4
const logger_level_4 = createLogger({
  format: combine(
    format.colorize(),
    timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
    logFormat
  ),
  transports: [new transports.Console()],
});

// level 5
const logFormat2 = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
});
const logger_level_5 = createLogger({
    format: combine(
      format.colorize(),
      timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
      format.errors({ stack: true }),
      logFormat2
    ),
    transports: [new transports.Console()],
});

// level 6
let logger = null;
if(process.env.NODE_ENV === 'development') {
    logger = require('./dev-logger')();
} else {
    logger = require('./prod-logger')();
}
module.exports = logger;
