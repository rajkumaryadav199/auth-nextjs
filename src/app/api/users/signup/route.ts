import { connect } from "@/dbConfig/dbConfig";
import User from "@/app/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function POST(request:NextRequest) {
    try {
        const reqBody = request.json();
        const {username, email, password} = reqBody;
        console.log("users", email);
        
        const user = await username.findOne({email});
        if(user){
            return NextRequest.json({error:"User already exist"}, {status:400})
        }
    } catch (error: any) {
        return NextResponse.json({error: error.message}),
        {status:500}
    }
}