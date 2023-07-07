import "dotenv/config";
import { log, error } from "console";
import { logger } from "../config/logger.mjs";
import { StatusCodes } from "http-status-codes";
export const isValidUser = (userName, token) => {
  logger.info(`UserName is : ${userName} and its token key is : ${token}`);

  if (userName !== process.env.GITHUB_USERNAME) {
    return "Not Valid userName";
  }
  if (
    token !== process.env.GITHUB_TOKEN &&
    token !== process.env.GITHUB_TOKEN_PRIVATE
  ) {
    return "Not Valid token";
  }
  return "valid";
};

export const prepareResponse = (response, dtoName) => {
  const responseDTO = [];
  if (Array.isArray(response)) {
    for (let i = 0; i < response.length; i++) {
      let res = response[i];
      logger.debug(`GitHub Repo is : ${JSON.stringify(res)}`);
      responseDTO.push(new dtoName({ ...res }));
    }
  }
  return responseDTO;
};

export const errorHandle = (err, req, res, next) => {
  //handle the error
  logger.error(err.message);
  res.status(StatusCodes.BAD_REQUEST).send({
    Response: err.message,
  });
};


export const methodStartExecuting =(methodName)=>{
    logger.info(`Method ${methodName} Start executing`)
    console.time(methodName);
}

export const methodEndExecuting =(methodName)=>{
    logger.info(`Method ${methodName} End executing and below is the total time taken by this method.`);
    console.timeEnd(methodName);
}