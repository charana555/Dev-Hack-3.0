import connect from "../../utils/connect";
import User from "../../models/userSchema"
connect();

export default async function handler(req,res){

 
 const {method} = req;
  if( method === 'POST'){

    try {
      const {email} = req.body;
      const already = await User.findOne({email});

      if(already){
        return res.status(400).json({error:"Email already exists"});
      }
      const createUser = await User.create(req.body);
      res.status(200).json({data:createUser})

    } catch (error) {
      res.status(500).json({error:"Server error"})
    }

   
  }
      
}