
const errorMiddleware = (error,req,res,next) => {

    const status = error.status || 500;
    const message = error.message || "Something went Wrong";
    const extraDetails = error.extraDetails || "Something went wrong. Please try again later";
    
    return res.status(status).json({message: message, extraDetails: extraDetails});
  
  }
  
  module.exports = errorMiddleware;