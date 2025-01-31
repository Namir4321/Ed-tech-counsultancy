import React from "react";
import PerformanceIndicator from "@/components/Sidebar/PerformanceIndicator";
import { FaUsers } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import DoughnutChart from "../../../components/Chart/DoughnutChart";
import RecentActivity from "@/components/Dashboard/RecentActivity";
import {
  fetchSubmissionForm,
  totalCallback,
  fetchSubmissionLength,
  fetchUsersPerMonth,
} from "@/utils/action";
const OverViewPage = async () => {
  const TotalUser = await fetchSubmissionLength();
  const mentorCount = await fetchSubmissionLength("mentor");
  const InstituteCount = await fetchSubmissionLength("institution");
  const usersPerMonth = await fetchUsersPerMonth();
  const totalCall = await totalCallback();

  const allsubmission = await fetchSubmissionForm();
  const businessMentorCount = await fetchSubmissionLength("bussines_mentor");
  const studyVisaMentorCount = await fetchSubmissionLength("study_visa_mentor");
  const totalMentors = mentorCount + businessMentorCount + studyVisaMentorCount;
  const TotalPartner = await fetchSubmissionLength("partner");
  const chartdata = [
    mentorCount,
    businessMentorCount,
    studyVisaMentorCount,
    InstituteCount,
    TotalPartner,
    totalMentors + 5,
  ];
  const mentorData = [
    mentorCount,
    businessMentorCount,
    studyVisaMentorCount,
    TotalUser,
  ];
  const alldat = [
    mentorCount,
    businessMentorCount,
    studyVisaMentorCount,
    TotalUser,
    InstituteCount,
    TotalPartner,
  ];
  return (
    <div className="mt-2">
      <h4 className="p-1 text-xl mx-1 font-medium tracking-tight lg:text-2xl">
        Overview
      </h4>
      <div className="grid grid-cols-2  gap-4 md:grid-cols-4 p-2">
        <PerformanceIndicator
          iconone={<FaUsers className="text-3xl text-blue-500" />}
          icontwo={<IoMdTrendingUp className="text-3xl text-green-500" />}
          heading="Total user"
          counttotal={TotalUser}
        />
        <PerformanceIndicator
          iconone={<FaUsers className="text-3xl text-blue-500" />}
          icontwo={<IoMdTrendingUp className="text-3xl text-green-500" />}
          heading="Total Mentors"
          counttotal={totalMentors}
        />
        <PerformanceIndicator
          iconone={<FaUsers className="text-3xl text-blue-500" />}
          icontwo={<IoMdTrendingUp className="text-3xl text-green-500" />}
          heading="Callback Request"
          counttotal={totalCall.length}
        />
        <PerformanceIndicator
          iconone={<FaUsers className="text-3xl text-blue-500" />}
          icontwo={<IoMdTrendingUp className="text-3xl text-green-500" />}
          heading="Total Partner Instution"
          counttotal={TotalPartner}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  mt-6 gap-4">
        <DoughnutChart
          type="bar"
          data={chartdata}
          label={[
            "partner",
            "mentor",
            "institution",
            "bussines_mentor",
            "study_visa_mentor",
          ]}
          className="md:col-span-2 md:p-12 p-0 flex justify-start items-center w-full max-h-[400px]"
        />
        <div className="col-span-1  flex flex-col space-y-4 justify-center items-center">
          {/* Your content for the smaller 1/3 part */}
          <DoughnutChart
            type="doughnut"
            data={mentorData}
            label={[
              "Visa Mentor",
              "Bussines Mentor",
              "Total User",
              "Total User",
            ]}
            className="flex p-6 mt-6 justify-center items-center w-full max-h-[300px]"
            legendtoggle={true}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  mt-6 gap-">
        <DoughnutChart
          type="doughnut"
          className="flex md:col-span-1 p-6 mt-6 justify-center items-center w-full max-h-[300px]"
          legendtoggle={true}
          label={[
            "Visa Mentor",
            "Bussines Mentor",
            "Partner",
            "Total User",
            "Institution",
          ]}
          data={alldat}
        />
        <DoughnutChart
          type="line"
          label={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ]}
          data={usersPerMonth}
          className="md:col-span-2 md:p-12 p-0 flex justify-start items-center w-full max-h-[400px]"
        />
      </div>
      <div className="p-6 border mb-6">
        <RecentActivity submission={allsubmission} />
      </div>
    </div>
  );
};

export default OverViewPage;
