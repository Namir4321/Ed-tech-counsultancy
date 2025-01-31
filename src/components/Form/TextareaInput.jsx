import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const TextareaInput = ({ name, label, placeholder, type, className }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        className={className}
        id={name}
        name={name}
        type={type}
        rows={3}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default TextareaInput;
