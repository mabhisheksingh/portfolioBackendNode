import "dotenv/config";
import { logger } from "../config/logger.mjs";
import { StatusCodes,ReasonPhrases } from "http-status-codes";
export const isValidUser = (userName, token) => {
  logger.debug(`UserName is : ${userName} and its token key is : ${token}`);

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
  logger.debug(`Response for DTOModel Name : ${dtoName} \n response :  ${JSON.stringify(response)}`);
  const responseDTO = [];
  if (Array.isArray(response)) {
    for (let i = 0; i < response.length; i++) {
      let res = response[i];
      responseDTO.push(new dtoName({ ...res }));
    }
  }else{
    return response;
  }
  return responseDTO;
};

export const errorHandle = (err, req, res, next) => {
  logger.info("status ",err.errStatusCode)
  const statusCode = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
  const errorMessage = err.message || ReasonPhrases.INTERNAL_SERVER_ERROR;
  //handle the error
  logger.error(errorMessage);
  res.status(statusCode).send({ Response: errorMessage});
};


export const methodStartExecuting =(methodName)=>{
    logger.info(`Method ${methodName} Start executing`)
    console.time(methodName);
}

export const methodEndExecuting =(methodName)=>{
    logger.info(`Method ${methodName} End execution`);
    console.timeEnd(methodName);
}