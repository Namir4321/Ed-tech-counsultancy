import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const FormInput = ({ name,defaultValue, label, placeholder,type, className }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input
        defaultValue={defaultValue || ""}
        className={className}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default FormInput;
