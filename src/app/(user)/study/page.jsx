import React from "react";
import { fetchSubmissionForm } from "@/utils/action";
import MentorCard from "@/components/Card/MentorCard";
import Footer from "@/components/Home/Footer";

const StudyPage = async () => {
  const formstate = "study_visa_mentor";
  const name = "";
  const mentors = await fetchSubmissionForm(name, formstate);

  return (
    <>
      <div className="md:px-20 md:py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mentors.map((item) => (
          <MentorCard key={item.id} link="study" submission={item} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default StudyPage;
