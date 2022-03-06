import connect from "../../utils/connect";
import User from "../../models/userSchema"
connect();

export default async function handler(req,res){

    const data = await User.find({category: "work"});

    res.status(200).json(data)

}