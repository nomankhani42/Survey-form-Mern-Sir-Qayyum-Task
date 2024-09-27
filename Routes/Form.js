import express from 'express';
import { postForm } from '../Controllers/Form.js';
const Router=express.Router();


Router.post('/submit',postForm)






export default Router ;