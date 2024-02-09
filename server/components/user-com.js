const user = (req,res) => {
    try {
      const userData = req.user;
      console.log(userData);
       return res.status(200).json({userData});
    } catch (error) {
      console.error('Error during registration:', error);
    }
   }
  
   module.exports = user;