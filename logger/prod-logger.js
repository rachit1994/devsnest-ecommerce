const { createLogger, format, transports } = require("winston");
const { combine, timestamp } = format;
const DiscordTransport = require("winston-discord-transport").default;
const SlackHook = require("winston-slack-webhook-transport");

// level 5
function buildProdLogger() {
  return createLogger({
    format: combine(
      // format.colorize(),
      timestamp(),
      format.errors({ stack: true }),
      format.json()
    ),
    defaultMeta: { service: "user-service" },
    transports: [
      // new transports.File({ filename: "logs/error.log", level: "error" }),
      // new transports.File({ filename: "logs/combined.log" }),
      new DiscordTransport({
        webhook:
          "https://discord.com/api/webhooks/894476358720323614/PlATT2BCtBlxnS8icIK-MxuHVXy2FaNOECuB9bM1awu-w4c3OiG-pg6NmO2v5qDrfUEh",
        defaultMeta: { service: "my_node_service" },
        level: "warn",
      }),
      new SlackHook({
        webhookUrl: "https://hooks.slack.com/services/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",
      }),
    ],
  });
}
module.exports = buildProdLogger;
