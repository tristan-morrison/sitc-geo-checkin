import * as winston from "winston";

import { WINSTON_CONFIG } from "./constants";

const logger = winston.createLogger({
    ...WINSTON_CONFIG,
    defaultMeta: { service: "index" }
});



