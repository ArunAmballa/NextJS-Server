"use server"
import prisma from "@/db"
async function solve(username:string,password:string){
  
    const user=await prisma.user.create({
        data:{
            username:username,
            password:password 
        }
    })
    return {
        message:user
    }
}

export default solve;