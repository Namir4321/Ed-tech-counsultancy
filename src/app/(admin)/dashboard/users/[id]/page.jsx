import React from "react";
import CallbackUser from "@/components/Dashboard/User/CallbackUser";
import UserInfo from "@/components/Dashboard/User/UserInfo";
const UserPage = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="p-4 flex space-x-4">
          <h1 className=" hidden sm:block text-2xl md:text-4xl text-muted-foreground font-extrabold">
             User Detail
          </h1>
        </div>
      </div>
      <div className="">
        <UserInfo/>
      </div>
    </div>
  );
};

export default UserPage;
