import * as winston from "winston";

const { combine, timestamp, colorize, printf } = winston.format;

// thank you to Xeoncross on Github for the Winston printf function
// Github issue: https://github.com/winstonjs/winston/issues/1135
// Xeoncross: https://github.com/Xeoncross
export const WINSTON_CONFIG = {
    level: "silly",
    format: combine(
        colorize(),
        timestamp(),
        printf((info) => {
            const {
                timestamp, level, message, ...args
            } = info;

            const ts = timestamp.slice(0, 19).replace('T', ' ');
            return `${level} [${args["service"]}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console()
    ]
};