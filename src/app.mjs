import 'dotenv/config'
import { StatusCodes ,ReasonPhrases} from 'http-status-codes';
import {getAllRepo} from './router/GitHubRouter.mjs';
import express from 'express'
import { V1_GITHUB } from './constant/urlPaths.mjs';
import { errorHandle } from './utils/utils.mjs';
import { logger } from './config/logger.mjs';
const app = express();

//! version 1 api
app.use(V1_GITHUB, getAllRepo)


//**This is common path not found handler */
app.all('*', (req, res)=>{
    const errorMessage = `Not valid path ${req.originalUrl}`;
    logger.error(errorMessage)
    res.status(StatusCodes.BAD_REQUEST).send(errorMessage)
})

//**This is global error handling middleware
app.use(errorHandle);



export default app;

