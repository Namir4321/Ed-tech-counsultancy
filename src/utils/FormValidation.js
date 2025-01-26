import * as z from "zod";

export const validateWithZodSchema = async (schema, data) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(", ") || errors);
  }
  return result.data;
};
export const logInSchema = z.object({
  email: z
    .string()
    .min(2, { message: "it's a required field" })
    .email({ message: "This is not a valid email" }),
  password: z
    .string()
    .min(6, { message: "Check your credentials" }),
});
export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Full Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email format." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
    confirmpassword: z.string().min(6, {
      message: "Confirmation password must be at least 6 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });
