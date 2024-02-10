const {z} = require('zod');

const SignUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string()
    .min(8, { message: "Password should be at least 8 characters" })
    .max(20, { message: "Password should be less than 20 characters" })
    .refine((value) => {
      const specialSymbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
      return specialSymbolRegex.test(value);
    }, { message: "Password must contain at least one special symbol" }),
  // confirmPassword: z.string().min(8).max(20),
});

module.exports = SignUpSchema;