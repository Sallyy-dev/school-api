const User = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async(req,res)=>{
    try{
        const {name,email,password,role}= req.body;

        if(!email ||!name || !email || !password || !role){
          return res.status(400).json({ message: 'Missing fields' })
        }

        const exisiting = await User.findOne({email});
        if(exisiting){
        return res.status(400).json({ message: 'Email exists' })
        }

        const passwordHash = await bcrypt.hash(password,10);

        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:passwordHash,
            role: req.body.role || "student",
        });
        const newUser = await user.save();
        res.status(201).json({ success: true, user: newUser });
    }
    catch(err){
    res.status(400).json({ success: false, message: err.message });
    }
};


const login = async (req, res) => {
  try {
const { email, password } = req.body;

const user = await User.findOne({ email: email.toLowerCase().trim() });

if (!user){
return res.status(400).json({ message: "Invalid Email" });
} 

const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || "1h" }
    );

    res.json({
  message: "Login successful",
  token,
  user: {
    id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
    avatar: user.avatar
  }
});

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Logout 
const logout = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ message: "No token provided" });
    }
    res.json({ message: "Logout successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {register , login , logout}




