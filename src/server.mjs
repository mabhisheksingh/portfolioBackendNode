import 'dotenv/config'
import app from './app.mjs'
import { logger } from './config/logger.mjs';


const port  = process.env.PORT || 8080;

const listen  = app.listen(port, ()=>{
    logger.info(`Listen on port ${listen.address().port}`);
    // logger.debug(`Listen on port ${listen.address().port}`);
    // logger.warn(`Listen on port ${listen.address().port}`);
    // logger.error(`Listen on port ${listen.address().port}`);
    // logger.silly(`Listen on port ${listen.address().port}`);
})

export default app;