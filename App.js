import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import  FormRouter from './Routes/Form.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory


dotenv.config();
const App=express();
App.use(cors());
App.use(express.static(path.join(__dirname,'./build')))

App.use('/api/v1',FormRouter)
App.use('*',(req,res)=>{
  return res.sendFile(path.join(__dirname,'/build','index.html'))
})


// db connection 

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.mongo_url);
    console.log('Db Connected')
 
}










App.listen(8080,()=>{
    console.log('server Running')
})