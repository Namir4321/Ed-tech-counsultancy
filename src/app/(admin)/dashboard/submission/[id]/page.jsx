import React from "react";
import { ReviewSubmissionPage } from "@/components/Dashboard/Submission/ReviewSubmissionPage";
const SubmissionReviewPage = async ({ params }) => {
  const { id } = await params;
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="p-4 flex space-x-4">
          <h1 className=" hidden sm:block text-2xl md:text-4xl text-muted-foreground font-extrabold">
            Submitted User Details
          </h1>
        </div>
      </div>
      <div className="">
        <ReviewSubmissionPage subId={id} />
      </div>
    </div>
  );
};

export default SubmissionReviewPage;
