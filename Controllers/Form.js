import { FModel } from "../Models/FormModel.js"



export const postForm=async(req,res)=>{
    try {
          const Form =await new  FModel({...req.body});


          return res.status(200).json({
            success:true,
            message:'Your Feedback Submitted Successfully',
            Form
          })
    }
     catch (error) {
        console.log(error)
    }
}