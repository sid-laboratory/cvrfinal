
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name : {
    type:String,
    min:3,
  },
  email :{
    type:String,
    min:3,
  },
  password:{
    type:String,
    min:3,
  },
});

UserSchema.pre('save', async function(next){
this.password = await bcrypt.hash(this.password,10);
next();
});

UserSchema.methods.generateToken = async function() {
try {
  return jwt.sign({
    userId : this._id.toString(),
    name : this.name,
    email : this.email,
  },
  'gitamhackathonrasudeep',
  {
    expiresIn : "32d",
  });

} catch (error) {
  console.log(error);
}
}


UserSchema.methods.verifyPassword = async function(password) {
try{
return await bcrypt.compare(password,this.password);
}
catch(err)
{
  console.log(err);
}

}


const User = mongoose.model('users', UserSchema);

module.exports = User;  




