const User = require('../DatabaseSchema/user');

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    console.log("register back",req.body);

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(200).json({ msg: 'User already exists' });
    }

    // Create a new user
    const newUserCreated = await User.create({ name, email, password });

    return res.status(200).json({
      msg: 'User successfully created',
      token: await newUserCreated.generateToken(),
      userId: newUserCreated._id.toString(),
    });
  } catch (error) {
    console.error('Error during registration:', error);
    next(error);
  }
};

module.exports = register;