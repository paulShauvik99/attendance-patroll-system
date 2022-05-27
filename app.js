const express = require ('express')
const dotenv = require('dotenv')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser');


dotenv.config({path:"./config.env"})


const port = process.env.PORT

require("./DB/connection");

const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
};

app.use(express.json());
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(require("./router/auth"));



// console.log("hello world")


app.listen(port,()=>{
    console.log(`port running at ${port}`);
})


