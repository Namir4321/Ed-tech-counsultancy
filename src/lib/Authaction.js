"use server";
import { redirect } from "next/navigation";
import db from "@/utils/db";
import axios from "axios";
import bcryptjs from "bcryptjs";
import { signUpSchema, validateWithZodSchema } from "@/utils/FormValidation";
import { logInSchema } from "../utils/FormValidation";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
export const HandleSignUpAction = async (prevState, formData) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validateFields = await validateWithZodSchema(signUpSchema, rawData);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_PRODUCTION_WEBSITE_URL}/api/auth/register`,
      validateFields
    );
  } catch (err) {
    if (err.response && err.response.data) {
      return { message: err.response.data.message };
    }
    return { message: err.message };
  }
  redirect("/signin");
};

// login
export const handleSignInAction = async (prevState, formData) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validateFields = await validateWithZodSchema(logInSchema, rawData);
    const response = await signIn("credentials", {
      email: validateFields.email,
      password: validateFields.password,
      redirect: false,
    });
    // console.log("Sign-in response:", response);
    // if (response) {
    // }
    //  return { message: "Login successful" };
  } catch (error) {
     if (error instanceof AuthError) {
       switch (error.type) {
         case "CallbackRouteError":
          console.log(error.cause.err)
           return { message: error.cause.err.message, redirect: "/signin" };
         case "AccessDenied":
           return {
             message: "Email not found. Please sign up to create an account!",
             redirect: "/signin",
           };
         default:
           return { message: "Something went wrong" };
       }
     }
  }
    redirect("/my-account");

};
export const logout = async () => {
  await signOut();
};

export const hashPassword = async (password, saltRounds) => {
  console.log(password);
  try {
    const hashedPassword = await bcryptjs.hash(password, saltRounds);
    return hashedPassword;
  } catch (err) {
    return { message: err.message || "Password is not hased" };
  }
};
