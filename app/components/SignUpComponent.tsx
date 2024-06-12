"use client"
import axios from "axios"
import { useState } from "react"
import solve from "../actions/user"

export default function SignUpComponent(){
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    return (
        <div>
            <input className="text-black"type="text" id="username" name="username" onChange={(e)=>setUserName(e.target.value)}/>
            <input className="text-black" type="text" id="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={
                async()=>
                    {
                        const response=await solve(username,password)
                        console.log(response)
                    }
            }>Submit</button>

        </div>
    )

}