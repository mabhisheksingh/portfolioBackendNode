import 'dotenv/config'
import axios from './basicAxios.mjs';

const githubURL = process.env.GITHUB_URL;
export  const getGitHub = async( {path,userName,token} )=>{
    return await axios({
        method:'get',
        baseURL:githubURL,
        url:path,
        headers:{
            "Authorization": 'Bearer '+token
        }

    })
}

