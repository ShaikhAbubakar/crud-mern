// NPM PACKAGES
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//CUSTOM MODULES
import Connection from './database/db.js';
import Routes from './routes/route.js'

//INTIALIZATION
const app = express();
dotenv.config();
Connection(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD);

//EXPRESS USE
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
// NOTE : CORS MUST BE USED ABOVE ROUTES
app.use("/",Routes)

//LISTENING
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    return console.log(`Running On PORT ${PORT}`)
});