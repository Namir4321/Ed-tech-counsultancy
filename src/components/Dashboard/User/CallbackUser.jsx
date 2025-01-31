import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/MentorCard";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Mail,
  Phone,
  School,
  Globe,
  FileText,
  Banknote,
} from "lucide-react";
import { format } from "date-fns";
import React, { cloneElement } from "react";
import { callbackdetails } from "@/utils/action";

const CallbackUser = async ({ callId }) => {
  const callback = await callbackdetails(callId);
  console.log(callback);
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Main Card */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">
                {callback.fullname}
              </CardTitle>
              <CardDescription className="mt-2 flex items-center gap-4">
                <Badge
                  variant={
                    callback.status === "review" ? "secondary" : "default"
                  }
                >
                  {callback.submission.status.toUpperCase()}
                </Badge>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  {callback.country}
                </span>
              </CardDescription>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              <p>callback ID: {callback.id}</p>
              <p>
                {format(new Date(callback.createdAt), "MMM dd, yyyy HH:mm")}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <Mail className="h-5 w-5" />
                  Contact Information
                </h3>
                <div className="space-y-2">
                  <InfoItem
                    icon={<Mail />}
                    label="Email"
                    value={callback.email}
                  />
                  <InfoItem
                    icon={<Phone />}
                    label="Phone"
                    value={callback.phone}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <FileText className="h-5 w-5" />
                  Academic Details
                </h3>
                <div className="space-y-2">
                  <InfoItem
                    label="Course"
                    value={callback.submission.course.join(", ")}
                  />
                  <InfoItem
                    label="Language Courses"
                    value={callback.languageCourses}
                  />
                  <InfoItem
                    icon={<Banknote />}
                    label="Fees"
                    value={`$${callback.fees}`}
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <CalendarDays className="h-5 w-5" />
                  Timeline
                </h3>
                <div className="space-y-2">
                  <InfoItem
                    label="Preferred Time to call"
                    value={`${format(new Date(callback.date), "PP")} ${format(
                      new Date(`1970-01-01T${callback.time}`),
                      "h:mm a"
                    )}`}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Additional Information
                </h3>
                <div className="space-y-2">
                  <InfoItem label="Website" value={callback.website || "N/A"} />
                  <InfoItem
                    label="Resume"
                    value={callback.resume ? "Attached" : "Not Provided"}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-lg font-semibold mb-4">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {callback.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Reusable Info Item Component
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-4 text-sm">
    {icon &&
      cloneElement(icon, {
        className: "h-4 w-4 mt-1 text-muted-foreground",
      })}
    <div className="flex-1">
      <div className="font-medium text-foreground">{label}</div>
      <div className="text-muted-foreground">{value || "N/A"}</div>
    </div>
  </div>
);

export default CallbackUser;
