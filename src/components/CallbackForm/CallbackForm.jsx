"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import DropDownForm from "../CallbackForm/DropdownForm";
import UserFormSubmission from "@/components/CallbackForm/UserFormSubmission";
const CallbackForm = () => {
  const [formstate, setFormState] = useState("partner");
  return (
    <Dialog>
      <DialogTrigger className=" text-white px-4 py-1 rounded">
        {/* {addtype} */}
        Join us
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join as a</DialogTitle>
          <DropDownForm setFormState={setFormState} formstate={formstate} />
          <UserFormSubmission formstate={formstate} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CallbackForm;
