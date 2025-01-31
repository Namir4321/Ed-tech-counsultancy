import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, BookOpen, FileText } from "lucide-react";
import Image from "next/image";
import Callback from "../Callback/Callback";
import Link from "next/link";

const MentorCard = ({ submission,link }) => {
  console.log(submission.id)
  return (
    <div>
      <Link href={`/${link}/${submission.id}`}>
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="relative">
            <div className="relative h-48 w-full">
              <Image
                src="https://images.unsplash.com/photo-1573164574048-f968d7ee9f20?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mentor background"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="flex items-start gap-4 mt-4">
              <div className="relative h-16 w-16">
                <Image
                  src="https://images.unsplash.com/photo-1573164574048-f968d7ee9f20?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                  width={64}
                  height={64}
                  className="rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div>
                <CardTitle className="text-2xl">
                  {submission.fullname}
                </CardTitle>
                <CardDescription className="mt-1">
                  <Badge variant="secondary" className="capitalize">
                    {submission.type.replace("_", " ")}
                  </Badge>
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{submission.email.slice(0, 5)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>{submission.country}</span>
                </div>
              </div>

              <div className="space-y-2">
                {submission.course?.length > 0 && (
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">
                      {submission.course.join(", ")}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {submission.description && (
              <p className="text-muted-foreground text-sm">
                {submission.description.split(" ").slice(0, 10).join(" ")}...
                <Button variant="link" className="h-auto p-0 ml-2">
                  Read more
                </Button>
              </p>
            )}
          </CardContent>

          <CardFooter className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2 text-sm">
              {/* <FileText className="h-4 w-4 text-muted-foreground" /> */}
              {/* {submission.resume ? (
            <a
              href={submission.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              View Resume
            </a>
          ) : (
            <span className="text-muted-foreground">No resume available</span>
          )} */}
              <Callback submission={submission} />
            </div>
            {/* <Button variant="outline">Contact Mentor</Button> */}
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default MentorCard;
