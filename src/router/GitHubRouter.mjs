import 'dotenv/config'

import express from 'express'
import { USER_REPO_PATH } from '../constant/urlPaths.mjs';
import { getGitHub } from '../crud_operation/getAxios.mjs';
import { isValidUser, methodEndExecuting, methodStartExecuting, prepareResponse } from '../utils/utils.mjs';
import { StatusCodes } from 'http-status-codes';
import {AllRepoList} from '../dto/GitHubDTO.mjs'

const router = express.Router();


export const getAllRepo = router.get("/getAllRepo", async( req, res,next)=>{
    methodStartExecuting("getAllRepo")
    const userName = req.headers["username"]
    const token = req.headers["token"]
    const isValid = isValidUser(userName,token);
    try{
        if( isValid !== "valid"  ){ 
            throw new Error(isValid);
         }
        let path  = USER_REPO_PATH;
        const response =  await getGitHub({path,userName,token}).then(d => d.data).catch(e => e.code);
        const responseDTO = prepareResponse(response , AllRepoList);
        res.status(StatusCodes.OK).send(responseDTO);
    }catch(err){
        next(new Error(err))
    }finally{
        methodEndExecuting("getAllRepo")
    }
})

export default router;