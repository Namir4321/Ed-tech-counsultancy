"use server";
import db from "@/utils/db";
import {
  callbackFormSchema,
  userFormSchema,
  validateWithZodSchema,
} from "./FormValidation";
import { redirect } from "next/navigation";

export const handleSubmissionForm = async (prevState, formData) => {
  try {
    const rawdata = Object.fromEntries(formData);
    const validateFields = await validateWithZodSchema(userFormSchema, rawdata);
    validateFields.phone = validateFields.code + validateFields.phone;
    if (!validateFields) throw new Error("Validation failed: Empty data");
    delete validateFields.code;
    console.log("Validated Fields:", validateFields);
    if (validateFields.course) {
      validateFields.course = validateFields.course
        .split(",")
        .map((course) => course.trim());
    }
    await db.Submission.create({ data: { ...validateFields } });
    // redirect("/dashboard");
  } catch (err) {
    console.log("Error:", err.stack);
    // console.log("Error:", err);
    return { message: err.message };
  }
};

export const fetchSubmissionForm = async (name, formstate) => {
  try {
    const whereClause = {
      fullname: {
        contains: name,
        mode: "insensitive",
      },
    };
    if (formstate !== "All") {
      whereClause.type = formstate;
    }
    const submission = await db.Submission.findMany({
      where: whereClause,
    });
    return submission;
  } catch (err) {
    return { message: err.message };
  }
};

export const fetchSingleSubmission = async (subId) => {
  console.log(subId);
  try {
    const SingleSubmission = await db.Submission.findUnique({
      where: {
        id: subId,
      },
    });
    return SingleSubmission;
  } catch (err) {
    console.log(err);
  }
};

export const UpdateSubmission = async (subId, status) => {
  try {
    console.log(status);
    const UpdateSubmission = await db.Submission.update({
      where: {
        id: subId,
      },
      data: {
        publish: status,
      },
    });
    return UpdateSubmission.status;
  } catch (err) {
    console.log(err);
  }
};
export const fetchSubmissionLength = async (formstate) => {
  try {
    const submission = await db.Submission.findMany({
      where: { type: formstate },
    });
    return submission.length;
  } catch (err) {
    console.log(err);
    return { message: err.message };
  }
};
export const fetchUsersPerMonth = async () => {
  try {
    const users = await db.Submission.findMany({
      select: { createdAt: true },
    });

    const months = Array(12).fill(0);

    users.forEach((user) => {
      const monthIndex = new Date(user.createdAt).getMonth();
      months[monthIndex] += 1; // Increment count for that month
    });

    return months; // Returns an array with user count per month
  } catch (err) {
    console.error("Error fetching users per month:", err.message);
    return Array(12).fill(0); // Return empty data in case of error
  }
};

export const submitCallback = async (prevState, formData) => {
  try {
    const rawdata = Object.fromEntries(formData);
    const validateFields = await validateWithZodSchema(
      callbackFormSchema,
      rawdata
    );
    if (!validateFields) throw new Error("Validation failed: Empty data");

    await db.callback.create({
      data: {
        ...validateFields,
      },
    });
  } catch (err) {
    console.log(err.message);
    return { message: err.message };
  }
};
export const fetchCallbackForm = async (name, formstate) => {
  try {
    const whereClause = {
      fullname: {
        contains: name,
        mode: "insensitive",
      },
    };
    if (formstate !== "All") {
      whereClause.type = formstate;
    }
    const submission = await db.callback.findMany({
      where: whereClause,
      select: {
        fullname: true,
        id: true,
        email: true,
        phone: true,
        course: true,
        submission: true,
      },
    });
    return submission;
  } catch (err) {
    return { message: err.message };
  }
};
export const callbackdetails = async (callId) => {
  try {
    if (!callId) return;
    const callback = await db.callback.findUnique({
      where: { id: callId },
      include: {
        submission: true,
      },
    });
    return callback;
  } catch (err) {
    console.log(err);
  }
};
// totalCallback;
export const totalCallback = async () => {
  try {
    const callback = await db.callback.findMany({});
    return callback;
  } catch (err) {
    console.log(err);
  }
};
