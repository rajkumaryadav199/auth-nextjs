import mongoose from "mongoose";

const userSchema = new mongoose({
    username:{
        type:String,
        required:[true, "Please provide the username"],
        unique:true
    },
    email:{
        type:String,
        required:[true, "Please provide the email"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Please provide the password"]
    },
    isVarified:{
        type:Boolean,
        default:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpire:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
});

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;