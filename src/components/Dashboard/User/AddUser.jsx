import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";
import UserForm from "@/components/Dashboard/User/UserForm";
const AddUSer = ({addtype,usertype}) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-black text-white px-4 py-1 rounded">
        {addtype}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <UserForm usertype={usertype} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddUSer;
