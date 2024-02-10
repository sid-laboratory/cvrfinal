const { parse } = require("path");

const validate = (schema) => async (req,res,next) => {
    try {
      // console.log("pranyasdasdasdasdasdasd",req.body);
      const parseBody = await schema.parseAsync(req.body);
      console.log("ParseBody " ,parseBody);
      req.body = parseBody;
    //   console.log("i am validate middleware : ",req);
      // next();
      // return res.status(200).json(req.body);
      return next();
    } catch (error) {
      const status = 422;
      const message = "Fill the input properly";
      const extraDetails = error.errors[0].message;
      console.log(error);
      const eror = {
        status,
        message,
        extraDetails,
      };
      return next(eror);
    }
  };
  
  module.exports = validate;