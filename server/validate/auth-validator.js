const {z} = require('zod');

const SignUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8,{message:"Password must contain atleast 8 characters"}).max(20),
  confirmPassword: z.string().min(8).max(20),
});

module.exports = SignUpSchema;