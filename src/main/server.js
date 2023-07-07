import 'dotenv/config'
import app from './app.js'


const port  = process.env.PORT || 8080;

console.log(port)
const listen  = app.listen(port, ()=>{
    console.log("Listen on port ",listen.address().port);
})