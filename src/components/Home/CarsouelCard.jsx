"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RoleCard from "./RoleCard";

const CarsouelCard = () => {
  return (
    <div className="bg-white  py-8 md:px-24 px-6">
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent className="flex">
          {[
            { role: "Business", subheading: "Launch your EdTech platform now" },
            {
              role: "Visa Mentor",
              subheading: "Guide students in visa applications",
            },
            { role: "Partner College", subheading: "Partner with us to help student grow" },
            { role: "Institution", subheading: "Build the future of learning with us" },
          ].map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <RoleCard
                role={item.role}
                subheading={item.subheading}
                buttontext="Launch Your Business"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      
      </Carousel>
    </div>
  );
};

export default CarsouelCard;
