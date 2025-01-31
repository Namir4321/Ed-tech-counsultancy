"use client";
import React, { useEffect, useState } from "react";
import AllUsers from "@/components/Dashboard/User/AllUsers";
import { Input } from "@/components/ui/input";
import { fetchSubmissionForm } from "@/utils/action";

const ManagePartnerPage = () => {
  const [name, setName] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [formstate, setFormState] = useState("All");
  console.log(name);
  useEffect(() => {
    const fetchData = async () => {
      const fetchSubmission = await fetchSubmissionForm(name, formstate);
      setSubmissions(fetchSubmission);
    };

    fetchData();
  }, [name, formstate]);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="p-4 flex space-x-4">
          <h1 className=" hidden sm:block text-2xl md:text-4xl text-muted-foreground font-extrabold">
            Mentors
          </h1>
        </div>
        <div className="p-4">
          <Input
            className="border"
            placeholder="Enter User name/type"
            value={name} // Bind value to `name` state
            onChange={handleChange} // Handle input changes
          />{" "}
        </div>
      </div>
      <div className="">
        <AllUsers submission={submissions} type="partner" publishvalue={true} />
      </div>
    </div>
  );
};

export default ManagePartnerPage;
