import connect from "../../utils/connect";
import User from "../../models/userSchema"
connect();

export default async function handler(req,res){

 
 const {method} = req;
  if( method === 'POST'){

    const {email ,category , password} = req.body;

    const verify = await User.findOne({email});

    if(verify){
        if(category == verify.category){
            if(password == verify.password){
                res.status(200).json({message:"Login Successful"})
            }else{
                res.status(400).json({error:"Invalid Credentials"})
            }
        }else{
            res.status(400).json({error:"Invalid Credentials"})
        }
    }else{
        res.status(400).json({error:"Invalid Credentials"})
    }

   
  }
      
}