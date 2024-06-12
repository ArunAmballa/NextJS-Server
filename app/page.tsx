import Image from "next/image";
import axios from "axios";
import prisma from "@/db";
import ButtonComponent from "./components/ButtonComponent";
  
export async function getData(){
  const response= await prisma.user.findFirst({})
  return response;
}
export default async function Home() {

  const userData=await getData();

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="flex flex-col bg-slate-200 justify-center items-center">
        <h1>{userData?.username}</h1>
        <h1>{userData?.password}</h1>
      </div>

      <ButtonComponent></ButtonComponent>
    </div>
  );
}
