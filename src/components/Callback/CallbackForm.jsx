"use client";
import React, { useState } from "react";
import FormInput from "../Form/FormInput";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import SubmitFrom from "@/components/Form/SubmitForm";
import { cn } from "@/lib/utils";
import TextareaInput from "../Form/TextareaInput";
import { Toggle } from "@/components/ui/toggle";
import { Check } from "lucide-react";
import Calander from "./Calander";
import FormContainer from "../Form/FormContainer";
import { submitCallback } from "@/utils/action";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
const CallbackForm = ({ submission }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [position, setPosition] = useState("");
  const [date, setDate] = useState();
  console.log(submission.course);
  return (
    <div>
      <FormContainer action={submitCallback}>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div>
            <FormInput
              name="fullname"
              className="ring-0"
              placeholder="Enter your full name"
              type="text"
              label="Full Name"
            />
          </div>
          <div className="hidden">
            <Input
              name="submissionId"
              className="ring-0 hidden"
              placeholder="Enter your full name"
              type="text"
              // label="Full Name"
              defaultValue="745db6ad-9901-4a0f-a62d-4588928a43dd"
              readOnly
            />
          </div>
          <div>
            <FormInput
              name="phone"
              type="tel"
              label="Phone Number (with country code) *"
              placeholder="+1234567890"
              pattern="\+[0-9]{1,15}"
              required
            />
          </div>
        </div>
        <div className="">
          <FormInput
            name="email"
            className="ring-0"
            placeholder="Enter your email"
            type="email"
            label="Email"
          />
        </div>
        <div className="">
          {" "}
          <Input
            name="course"
            className="ring-0 hidden "
            placeholder="Enter your full name"
            type="text"
            label=""
            value={position}
            readOnly
          />
          <Input
            name="date"
            className="hidden"
            type="text"
            value={date ? new Date(date).toISOString() : ""}
            readOnly
          />
         
          {submission.type === "institution"
            ? submission.languageCourses && (
                <DropdownMenu>
                  <DropdownMenuTrigger className="bg-black text-left mt-2 rounded w-full px-4 py-1 text-white">
                    {position || "Select Language"}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Languages Offered</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="px-3 font-normal"
                      onClick={() => setPosition(submission.languageCourses)}
                    >
                      {submission.languageCourses}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            : submission.type === "study_visa_mentor"
            ? submission.course?.length > 0 && (
                <DropdownMenu>
                  <DropdownMenuTrigger className="bg-black text-left mt-2 rounded w-full px-4 py-1 text-white">
                    {position || "Select Course"}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Courses Offered</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {submission.course.map((item, index) => (
                      <DropdownMenuItem
                        className="px-3 font-normal"
                        key={index}
                        onClick={() => setPosition(item)}
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            : submission.course?.length > 0 && (
                <DropdownMenu>
                  <DropdownMenuTrigger className="bg-black text-left mt-2 rounded w-full px-4 py-1 text-white">
                    {position || "Select Course"}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Courses Offered</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {submission.course.map((item, index) => (
                      <DropdownMenuItem
                        className="px-3 font-normal"
                        key={index}
                        onClick={() => setPosition(item)}
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
        </div>
        <div className="grid mb-2 mt-2 gap-2">
          <TextareaInput
            name="description"
            className="ring-0"
            placeholder="Enter your description"
            type="text"
            label="Description"
          />
        </div>
        <div>
          <span className="px-2">Want us to call you</span>

          <Toggle
            aria-label="Toggle bold"
            className="mb-2 data-[state=on]:bg-black data-[state=on]:text-white"
            pressed={isToggled}
            onPressedChange={setIsToggled}
          >
            <Check className="h-4 w-4" />
          </Toggle>
        </div>
        <div>
          {isToggled && (
            <div className="grid mb-2gl gap-2 grid-cols-1 md:grid-cols-2">
              <div className=" ">
                <Calander date={date} setDate={setDate} />
              </div>
              <div className="">
                <FormInput
                  name="time"
                  className="ring-0"
                  placeholder="pick time"
                  type="time"
                  label=""
                />
              </div>
            </div>
          )}
        </div>
        <SubmitFrom
          type="submit"
          className="w-full mt-2 mb-2"
          text="Submit"
          variant="default"
          btnsize="default"
        />
      </FormContainer>
    </div>
  );
};

export default CallbackForm;
