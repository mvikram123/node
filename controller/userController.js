const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const User=require("../model/userModel");


 async function signup(req, res , next){
    try {
        
        const {email, password}=req.body;
        //manbodhvikram@gamil.com and vikram@123
       const isExist=await User.findOne({ where: { email } });

       if (isExist) {
        res.status(409).json({error:"user is already exist"});
      }
      let hashPassword = await bcrypt.hash(password, 10);
      let newUser = new User({
        password:hashPassword, 
        email
      });
      await newUser.save();
      const token = jwt.sign({email:newUser.email}, "my_Secret_key123", {expiresIn:'1h'});
  
      res.status(200).json({msg:"user created successfully", token, newUser})
        
        
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"server error"})

    }
    
    
}
module.exports=signup