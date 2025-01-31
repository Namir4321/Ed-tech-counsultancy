"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownForm = ({ formstate, setFormState, type }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default">{formstate.toUpperCase()}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Join us as an</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={formstate} onValueChange={setFormState}>
          {type === "All" && (
            <DropdownMenuRadioItem value="All">All</DropdownMenuRadioItem>
          )}
          {/* <DropdownMenuRadioItem value="mentor">Mentor</DropdownMenuRadioItem> */}
          <DropdownMenuRadioItem value="bussines_mentor">
            Bussiness Mentor
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="study_visa_mentor">
            Study Visa Mentor
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="institution">
            Institutions
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="partner">Partner</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownForm;
