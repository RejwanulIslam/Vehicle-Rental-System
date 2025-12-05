import { NextFunction, Request, Response } from "express"


const auth=()=>{
return async(req:Request,res:Response,next:NextFunction)=>{
try {
 const token=req.headers.authorization
 console.log(token)   
} catch (error) {
   console.log(error) 
}
}
}

export default auth