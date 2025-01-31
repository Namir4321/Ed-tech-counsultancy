'use client'
import React, { useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "../ui/input";

const InputSearchForm = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );

  const timerRef = useRef(null); // To store the timeout ID

  const handleSearch = (value) => {
    clearTimeout(timerRef.current); // Clear the previous timeout
    timerRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }
      replace(`/dashboard/submissio?${params.toString()}`);
    }, 500); // 500ms delay before updating URL
  };

  return (
    <Input
      type="text"
      placeholder="find a property"
      className="max-w-xs dark:bg-muted"
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value); // Call handleSearch with value
      }}
      value={search}
    />
  );
};

export default InputSearchForm;
