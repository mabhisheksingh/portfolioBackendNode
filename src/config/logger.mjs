import 'dotenv/config'
import { createLogger, transports, format } from 'winston';
import { LOG_PATH } from '../constant/constantVariable.mjs';

const {colorize,timestamp, combine} =  format;
const level = process.env.LEVEL || 'info'

const customFormatter = format.printf( ({timestamp, message, level}) =>{
    return `${timestamp} [${level.toLocaleUpperCase()}]: ${message}`;
})

export const logger = createLogger({
    level: level,
    format: combine( timestamp({ format: new Date().toLocaleTimeString() } ) , customFormatter),
    transports:[
       new transports.File({
            filename: LOG_PATH ,
            maxFiles:3,
            maxsize: 1024
        })
    ],
    exitOnError:false
})


// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// print in console

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        level:level,
        format: format.combine( format.timestamp(), customFormatter)
    }));
}