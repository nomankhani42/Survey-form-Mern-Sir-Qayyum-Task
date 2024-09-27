import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import  FormRouter from './Routes/Form.js';


dotenv.config();
const App=express();
App.use(cors());

App.use('/api/v1',FormRouter)

// db connection 

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.mongo_url);
    console.log('Db Connected')
 
}










App.listen(8080,()=>{
    console.log('server Running')
})