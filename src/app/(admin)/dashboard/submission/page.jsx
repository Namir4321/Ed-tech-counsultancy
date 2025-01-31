"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import AllSubmissions from "@/components/Dashboard/Submission/AllSubmission";
import { fetchSubmissionForm } from "@/utils/action";
import DropdownForm from "@/components/CallbackForm/DropdownForm";

const SubmissionPage = () => {
  const [name, setName] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [ formstate, setFormState ] =useState("All")
  console.log(name);
  useEffect(() => {
    const fetchData = async () => {
      const fetchSubmission = await fetchSubmissionForm(name,formstate);
      setSubmissions(fetchSubmission);
    };

    fetchData();
  }, [name,formstate]);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] md:w-[95%] ">
        <div>
          <h1 className="hidden sm:block text-2xl md:text-4xl text-muted-foreground font-extrabold">
            Submission
          </h1>
        </div>
        <div className="flex gap-2" >
          <DropdownForm formstate={formstate} setFormState={setFormState} type={"All"} />
          <Input
            className="border"
            placeholder="Enter User name/type"
            value={name} // Bind value to `name` state
            onChange={handleChange} // Handle input changes
          />
        </div>

        {/* </div> */}
      </div>
      <div className="mt-6"></div>
      <AllSubmissions submissions={submissions} />{" "}
      {/* Pass fetched submissions to AllSubmissions */}
    </div>
  );
};

export default SubmissionPage;
