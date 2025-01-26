"use client";
import React from "react";
import { Button } from "../ui/button";
import { logout } from "@/lib/Authaction";

const Logout = () => {
  const handlelogout = async () => {
    await logout();
  };
  return (
    <Button size="sm" className="" variant="default" onClick={handlelogout}>
      Logout
    </Button>
  );
};

export default Logout;
