"use client";
import { useFormState } from "react-dom";
import { useActionState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
const initialState = {
  message: "",
};
const FormContainer = ({ action, children }) => {
  const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();
  const formRef = useRef(null);
  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state]);
  return (
    <form action={formAction} ref={formRef}>
      {children}
    </form>
  );
};

export default FormContainer;
