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
  password: z.string().min(6, { message: "Check your credentials" }),
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

export const userFormSchema = z.object({
  fullname: z.string().min(3, "Full Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  code: z.string().min(1, "Code is required"),
  type: z.string().min(1, "type is reqired"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Phone number must contain only numbers"),
  description: z.string().min(10, "Description must be at least 10 characters"),

  // Conditional Validation Based on User Type
  college: z.string().min(1, "collage is required").optional(),
  website: z.string().url("Invalid URL").optional(),

  course: z.union([z.string(), z.array(z.string())]).optional(),
  country: z.string().optional(),

  resume: z.string().url("Invalid Resume Link").optional(),

  institutionName: z.string().min(1, "collage is required").optional(),
  languageCourses: z.string().min(1, "collage is required").optional(),
  fees: z.string().min(1, "collage is required").optional(),
});
export const callbackFormSchema = z.object({
  fullname: z
    .string()
    .min(2, "Full name must be at least 2 characters long")
    .max(50, "Full name must be at most 50 characters"),
    phone: z
    .string()
    .regex(
      /^\+\d{10,15}$/,
      "Phone number must start with '+' counry code and contain 10-15 digits"
    ),
    
  submissionId: z.string().uuid("Invalid Submission ID format"),
  email: z.string().email("Invalid email address"),

  course: z.string().min(2, "Course name must be at least 5 characters long"),

  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),

  description: z
    .string()
    .min(5, "Description must be at least 5 characters long")
    .max(500, "Description must be at most 500 characters"),

  time: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Time must be in HH:mm format"),
});
