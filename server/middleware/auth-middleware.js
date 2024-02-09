const jwt = require('jsonwebtoken');  
const User = require('../DatabaseSchema/user')
const authMiddleWare = async (req, res, next) => {
  try {
    console.log("Auth Middleware",req.body);
    const token = req.header("Authorization");
    if(!token){
      return res.status(401).json({msg:"Token not found"});
    }
    const jwtToken = token.replace('Bearer',"").trim();

    const isVerified = jwt.verify(jwtToken, 'gitamhackathonrasudeep');
    const userData = await User.findOne({email:isVerified.email}).select({password:0});

    console.log(userData);

    req.user = userData;
    req.token = token;
    req.id = userData._id;
    
    console.log(userData);
    return next();
  } catch (error) {
    console.error('Error during authentication:', error);
    return res.status(401).json({ msg: 'Token is not valid' });
  }
}

module.exports = authMiddleWare;