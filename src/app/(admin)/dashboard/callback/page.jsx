import { Button } from "@/components/ui/button";
import React from "react";
import AllUsers from "@/components/Dashboard/User/AllUsers";
import { Input } from "@/components/ui/input";
import AddUser from "@/components/Dashboard/User/AddUser";
import CallbackList from "@/components/Dashboard/User/CallbackList";
import { fetchCallbackForm } from "@/utils/action";

const CallbackPage = async () => {
  const callbaklist = await fetchCallbackForm();
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="p-4 flex space-x-4">
          <h1 className=" hidden sm:block text-2xl md:text-4xl text-muted-foreground font-extrabold">
            Callback
          </h1>
        </div>
        <div className="p-4">
          <Input className="border" placeholder="Enter User name/type" />
        </div>
      </div>
      <div className="">
        <CallbackList callbaklist={callbaklist} />
      </div>
    </div>
  );
};

export default CallbackPage;
