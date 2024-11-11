import mongoose from "mongoose";

// function validateEmail(textEmail){
//     return /^\S+@\S+\.\S+$/.test(textEmail)
// }
// const usersSchema = new mongoose.Schema(
// {
//     "name":{
//         type: String ,
//         required: [true,"Khong dươc de trong ten"],
//     },
//     "age":{
//         type:  Number,
//     },
//     "email":{
//         type: String ,
//         validate:{
//             validator: validateEmail,
//             message:'Không đúng định dạng email'
//         }
//     },
//     "gender":{
//         type: Boolean ,
//     },
//     "password":{
//         type:String,
//         required:[true,"khong duoc de password trong"]
//     }
   
// },{timestamps:true})

const usersSchema = new mongoose.Schema(
{
    "username":{
        type: String ,
        required: [true,"Khong dươc de trong ten"],
    },
   
    "email":{
        type: String ,
     
    },
    "password":{
        type:String,
        required:[true,"khong duoc de password trong"]
    },
    "confirmPassword":{
        type:String,
        required:[true,"khong duoc de confirmPassword trong"]
    }
   
},{timestamps:true})





export default mongoose.model('users',usersSchema)