import React from "react";
import { Button } from "@/components/ui/button";
const SubmitForm = ({ text, btntype, btnclassName, btnsize, btnvariant }) => {
  return (
    <Button
      type={btntype}
      className={btnclassName}
      size={btnsize}
      variant={btnvariant}
    >
      {text}
    </Button>
  );
};

export default SubmitForm;
