const jwt = require("jsonwebtoken")
const User = require("../models/user")

const authenticate = async (req,res,next) => {
    try{
        const token = req.cookies.lmstoken;
        console.log('token', token);
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY)
        console.log('jwt ', verifyToken);
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})
        console.log('root user ', rootUser);
        if(!rootUser){
            throw new Error("User not found")
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

        
    }catch(error){
        res.status(401).send("Unauthorized")
        console.log(error)
    }
}



module.exports = authenticate