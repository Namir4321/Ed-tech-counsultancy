import React from "react";
import { fetchSingleSubmission } from "@/utils/action";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CallbackForm from "@/components/Callback/CallbackForm";
import Footer from "@/components/Home/Footer";

const InstutePage = async ({ params }) => {
  const { id } = await params;
  const details = await fetchSingleSubmission(id);
  console.log(details.languageCourses);
  return (
    <>
    <div className="container max-w-6xl py-12 px-12">
      <div className="grid grid-col md:grid-cols-2 gap-12">
        {/* Mentor Details Section */}
        <Card className="p-8 bg-muted/10">
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">
                  {details.fullname.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <div>
                <h1 className="text-3xl font-bold">{details.fullname}</h1>
                <p className="text-muted-foreground">
                  {details.type.toUpperCase()}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                About{" "}
                {details.type.charAt(0).toUpperCase() +
                  details.type.slice(1).toLowerCase()}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {details.description}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Specialties</h2>
              <div className="flex flex-wrap gap-4 ">
                {details.course?.length > 0 &&
                  details.course[0] // Access the first (and only) string in the array
                    .split(",") // Split the string by commas
                    .map((item, index) => (
                      <Badge key={index} variant="secondary" className="">
                        {item.trim()} {/* Remove any extra spaces */}
                      </Badge>
                    ))}
              </div>
            </div>
          </div>
        </Card>
        <div className="flex flex-col justify-cente">
          <Card className=" p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-8">Schedule Consultation</h2>
            <CallbackForm submission={details} />
          </Card>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default InstutePage;
