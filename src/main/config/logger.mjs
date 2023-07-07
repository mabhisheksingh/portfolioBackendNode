import 'dotenv/config'
import { createLogger, transports, format } from 'winston';
import { LOG_PATH } from '../constant/constantVariable.mjs';

const level = process.env.LEVEL || 'info'

const customFormatter = format.printf( ({timestamp, message, level}) =>{
    return `${timestamp} [${level.toLocaleUpperCase()}]: ${message}`;
})

export const logger = createLogger({
    level: level,
    format: format.combine(format.timestamp() , customFormatter),
    transports:[
       new transports.File({
            filename: LOG_PATH ,
            maxFiles:5,
            maxsize: 1024,
        }),
        // new transports.Http({
        //     host:'localhost',
        //     port:'9001',
        //     path:'metrics',
        // })
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