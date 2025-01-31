import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/MentorCard";
import { FaUsers } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";

import { Button } from "../ui/button";

const PerformanceIndicator = ({ iconone, icontwo, heading, counttotal }) => {
  return (
    <Card>
      {/* Icons Section */}
      <CardContent className="flex justify-between px-4 pt-4 pb-0 items-center">
        <div className="flex flex-1 justify-start">{iconone}</div>
        <div className="flex flex-1 justify-end">{icontwo}</div>
      </CardContent>
      {/* Text Section */}
      <CardContent className="px-4 pb-2 pt-2 text-start sm:justify-center">
        <div className="font-extralight text-muted-foreground">{heading}</div>
        <div className="text-5xl font-extrabold">{counttotal}</div>
      </CardContent>
    </Card>
  );
};

export default PerformanceIndicator;
