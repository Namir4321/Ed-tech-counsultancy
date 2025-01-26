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
import FormContainer from "@/components/Form/FormContainer"
import Link from "next/link";
import SubmitFrom from "@/components/Form/SubmitForm";
import { handleSignInAction } from "@/lib/Authaction";
const LoginForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            Login
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormContainer action={handleSignInAction}>
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                <FormInput
                  name="email"
                  className="ring-0"
                  placeholder="Enter your email"
                  type="email"
                  label="Email"
                />
              </div>
              <div className="grid gap-2 relative ">
                <FormInput
                  name="password"
                  className="ring-0"
                  placeholder="Enter your password"
                  type="password"
                  label="Password"
                />
                <a
                  href="#"
                  className="absolute -mt-[2px]  right-0 text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>

              <SubmitFrom
                type="submit"
                className="w-full"
                text="Login"
                variant="default"
                btnsize="default"
              />
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-6 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </FormContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
