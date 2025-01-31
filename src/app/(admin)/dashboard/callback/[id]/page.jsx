import React from "react";
import CallbackUser from "@/components/Dashboard/User/CallbackUser";
const CallbackPage = async({params}) => {
  const {id}=await params
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="p-4 flex space-x-4">
          <h1 className=" hidden sm:block text-2xl md:text-4xl text-muted-foreground font-extrabold">
            CallBack Request Users
          </h1>
        </div>
      </div>
      <div className="">
        <CallbackUser callId={id} />
      </div>
    </div>
  );
};

export default CallbackPage;
