import { NextResponse } from "next/server";
import db from "@/utils/db";
import { signUpSchema, validateWithZodSchema } from "@/utils/FormValidation";
import { hashPassword } from "@/lib/Authaction";
export const POST = async (req) => {
  try {
    const data = await req.json();
    if (!data) {
      return NextResponse.json(
        { message: "Request body is required." },
        { status: 400 }
      );
    }
    const validateFields = await validateWithZodSchema(signUpSchema, data);
    delete validateFields.confirmpassword;
    const hashedPassword = await hashPassword(validateFields.password, 10);
    validateFields.password = hashedPassword;
    if (!validateFields)
      return NextResponse.json(
        { message: "Check your credentials" },
        { status: 500 }
      );
    const existingEmail = await db.profile.findUnique({
      where: { email: validateFields.email },
    });
    if (existingEmail)
      return NextResponse.json(
        { message: "Email already exist" },
        { status: 500 }
      );

    await db.profile.create({
      data: {
        ...validateFields,
      },
    });
    return NextResponse.json({ message: "SignUp Sucessfull" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
};
