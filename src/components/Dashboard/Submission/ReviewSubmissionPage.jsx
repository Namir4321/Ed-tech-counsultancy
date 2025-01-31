import { fetchSingleSubmission } from "@/utils/action";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/MentorCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ReviewClient from "@/components/Dashboard/Submission/ReviewClient";
import DropDownPosition from "@/components/Dashboard/User/DropDownPosition";
export const ReviewSubmissionPage = async ({ subId }) => {
  console.log(subId);
  const Submission = await fetchSingleSubmission(subId);
  return <ReviewClient Submission={Submission} />;
};
