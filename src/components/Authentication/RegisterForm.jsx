import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormInput from "@/components/Form/FormInput";
import FormContainer from "@/components/Form/FormContainer";
import { HandleSignUpAction } from "@/lib/Authaction";
import Link from "next/link";
import SubmitFrom from "@/components/Form/SubmitForm";
const RegisterForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            Register
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm">
            Enter details to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormContainer action={HandleSignUpAction}>
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                <FormInput
                  name="name"
                  className="ring-0"
                  placeholder="Enter your full name"
                  type="text"
                  label="Full Name"
                />
              </div>
              <div className="grid gap-2">
                <FormInput
                  name="email"
                  className="ring-0"
                  placeholder="Enter your email"
                  type="email"
                  label="Email"
                />
              </div>
              <div className="grid gap-2 ">
                <FormInput
                  name="password"
                  className="ring-0"
                  placeholder="Enter your password"
                  type="password"
                  label="Password"
                />
              </div>
              <div className="grid gap-2">
                <FormInput
                  name="confirmpassword"
                  className="ring-0"
                  placeholder="Enter your password again"
                  type="password"
                  label="Confirm Password"
                />
              </div>

              <SubmitFrom
                type="submit"
                className="w-full"
                text="Register"
                variant="default"
                btnsize="default"
              />

              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-6 text-center text-sm">
              Have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Sign in
              </Link>
            </div>
          </FormContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
