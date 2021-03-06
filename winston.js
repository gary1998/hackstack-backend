module.exports = {
    initLogger: function(testcaseName) {
        var winston = require('winston');
        var customLevels = {
            levels: {
                debug: 0,
                info: 1,
                warn: 2,
                error: 3
            },
            colors: {
                debug: 'blue',
                info: 'green',
                warn: 'yellow',
                error: 'red'
            }
        };
        var logger = new(winston.createLogger)({
            transports: 
            [
                new(winston.transports.Console)({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.simple()
                    ),
                    level: process.env.LOG_LEVEL && process.env.LOG_LEVEL.toLowerCase() || "info"
                })
            ]
        });
        return logger;
    },
}