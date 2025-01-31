import React from "react";
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
import CallbackForm from "./CallbackForm";
import { fetchSubmissionForm } from "@/utils/action";
const Callback = async ({ submission }) => {
  const courses = await fetchSubmissionForm();
  return (
    <Dialog>
      <DialogTrigger className="bg-black text-white px-4 py-1 rounded">
        Contact
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join as a</DialogTitle>
          <CallbackForm submission={submission} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Callback;
