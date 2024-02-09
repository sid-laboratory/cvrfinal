const {z} = require('zod');

const LoginSchema = z.object({
  email: z.string().email().min(3).max(30),
  password: z.string()
    .min(8, { message: "Password should be at least 8 characters" })
    .max(20, { message: "Password should be less than 20 characters" })
    .refine((value) => {
      const specialSymbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
      return specialSymbolRegex.test(value);
    }, { message: "Password must contain at least one special symbol" }),
});

module.exports = LoginSchema;