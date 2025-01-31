"use client";
import React, { useEffect, useState } from "react";
import { fetchSingleSubmission, UpdateSubmission } from "@/utils/action";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/MentorCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DropDownPosition from "@/components/Dashboard/User/DropDownPosition";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const ReviewClient = ({ Submission }) => {
  console.log(Submission.publish);
  const [publishstatsus, setPublishStatus] = useState(Submission.publish);
  const handlePublishStatus = async (status) => {
    try {
      const updatedStatus = await UpdateSubmission(Submission.id, status);
      setPublishStatus(updatedStatus || false);
    } catch (error) {
      console.error("Error updating submission:", error);
    }
  };
  return (
    <Card className="max-w-3xl mx-auto p-6 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">User Details</CardTitle>
        <Badge variant="outline" className="mt-2 capitalize">
          {Submission.type.replace("_", " ")}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>
            <strong>Full Name:</strong> {Submission.fullname}
          </p>
          <p>
            <strong>Email:</strong> {Submission.email}
          </p>
          <p>
            <strong>Phone:</strong> {"+" + Submission.phone}
          </p>
          {Submission.country && (
            <p>
              <strong>Country:</strong> {Submission.country}
            </p>
          )}
          {Submission.college && (
            <p>
              <strong>College:</strong> {Submission.college}
            </p>
          )}
          {Submission.course?.length > 0 && (
            <p>
              <strong>
                {Submission.type.toLowerCase() === "study_mentor"
                  ? "Course/College:"
                  : Submission.type.toLowerCase() === "mentor"
                  ? "Course/College:"
                  : Submission.type.toLowerCase() === "business_mentor"
                  ? "Business:"
                  : Submission.type.toLowerCase() === "institution"
                  ? "Course:"
                  : Submission.type.toLowerCase() === "partner"
                  ? "Course Offered"
                  : "Details:"}
              </strong>{" "}
              {Submission.course.join(", ")}
            </p>
          )}
          {Submission.website && (
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={Submission.website}
                className="text-blue-600"
                target="_blank"
              >
                {Submission.website}
              </a>
            </p>
          )}
          {/* <p> */}
          <strong>Status:</strong>{" "}
          <span className="capitalize">
            <Badge>{!publishstatsus ? "Under Valuation" : "Published"}</Badge>
          </span>
          {/* </p> */}
          <div className="flex gap-4 ">
            <strong>Publish:</strong>
            {/* <DropDownPosition heading="Publish it" menu={["True", "False"]} /> */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-4  rounded-lg bg-black text-white">
                {publishstatsus ? "Yes" : "No"}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handlePublishStatus(true)}>
                  Yes
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handlePublishStatus(false)}>
                  No
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {Submission.resume && (
            <p>
              <strong>Resume:</strong>{" "}
              <a
                href={Submission.resume}
                className="text-blue-600"
                target="_blank"
              >
                View
              </a>
            </p>
          )}
          {Submission.institutionName && (
            <p>
              <strong>Institution Name:</strong> {Submission.institutionName}
            </p>
          )}
          {Submission.languageCourses && (
            <p>
              <strong>Language Courses:</strong> {Submission.languageCourses}
            </p>
          )}
          {Submission.fees && (
            <p>
              <strong>Fees:</strong> {Submission.fees}
            </p>
          )}
          {Submission.description && (
            <p className="border-t pt-4">
              <strong>Description:</strong> {Submission.description}
            </p>
          )}
          <p className="text-sm text-gray-500">
            Submitted on {new Date(Submission.createdAt).toLocaleDateString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewClient;
