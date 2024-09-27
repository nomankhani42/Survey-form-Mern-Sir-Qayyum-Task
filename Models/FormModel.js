import mongoose, {model, Schema} from "mongoose";



const FormSchema= new Schema({
    first_Name:{type:String,required:true},
    last_Name: {type:String,required:true},
    email:{type:String,required:true} ,
    design_Rating: {type:Number,required:true},
    overAllRating: {type:Number,required:true},
    feedBack:{type:String,required:true}
})

export const FModel=new model ('Survey Data',FormSchema)