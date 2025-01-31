import FormInput from "@/components/Form/FormInput";
import React from "react";
import {handleSubmissionForm} from "@/utils/action"
import TextareaInput from "@/components/Form/TextareaInput";
import FormContainer from "@/components/Form/FormContainer";
import SubmitFrom from "@/components/Form/SubmitForm";
import DropDownForm from "@/components/Form/DropDownForm";
import { Input } from "../ui/input";
const UserFormSubmission = ({ formstate }) => {
  console.log(formstate);
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="grid gap-2">
          <FormContainer action={handleSubmissionForm}>
            {/* Common Fields for All User Types */}
            <div className="grid mb-2 gap-2">
              <div className="grid mb-2 grid-cols-2 gap-2">
                <div className="col-span-1">
                  <FormInput
                    name="fullname"
                    className="ring-0"
                    placeholder="Enter your full name"
                    type="text"
                    label="Full Name"
                  />
                  <Input
                    name="type"
                    className="ring-0 hidden "
                    placeholder="Enter your full name"
                    type="text"
                    label=""
                    value={formstate}
                    readOnly
                  />
                </div>
                <div className="col-span-1">
                  <FormInput
                    name="email"
                    className="ring-0"
                    placeholder="Enter your email"
                    type="email"
                    label="Email"
                  />
                </div>
              </div>
            </div>

            <div className="grid mb-2 grid-cols-2 gap-2">
              <div className="col-span-1">
                <FormInput
                  name="code"
                  className="ring-0"
                  placeholder="Enter your code"
                  type="number"
                  label="Code (+91)"
                />
              </div>
              <div className="col-span-1">
                <FormInput
                  name="phone"
                  className="ring-0"
                  placeholder="Enter your number"
                  type="number"
                  label="Phone"
                />
              </div>
            </div>

            {/* Dynamic Fields Based on User Type */}

            {formstate === "partner" && (
              <>
                <div className="grid mb-2 gap-2">
                  <FormInput
                    name="college"
                    className="ring-0"
                    placeholder="Enter your college/company name"
                    type="text"
                    label="College Name"
                  />
                </div>
                <div className="grid mb-2 grid-cols-2 gap-2">
                  <div className="col-span-1">
                    <FormInput
                      name="course"
                      className="ring-0"
                      placeholder="Enter your course/job title"
                      type="text"
                      label="Course/Job Title"
                    />
                  </div>
                  <div className="col-span-1">
                    <FormInput
                      name="country"
                      className="ring-0"
                      placeholder="Enter your country"
                      type="text"
                      label="Country"
                    />
                  </div>
                </div>
                <div className="grid mb-2 gap-2">
                  <FormInput
                    name="website"
                    className="ring-0"
                    placeholder="Enter your collage website"
                    type="text"
                    label="Website"
                  />
                </div>
              </>
            )}
            {["mentor", "bussines_mentor", "study_visa_mentor"].includes(
              formstate
            ) && (
              <>
                <div className="grid mb-2 gap-2">
                  <FormInput
                    name="resume"
                    className="ring-0"
                    placeholder="Enter your CV link"
                    type="text"
                    label="CV G-Drive Link"
                  />
                </div>
                <div className="grid mb-2 gap-2">
                  <FormInput
                    name="course"
                    className="ring-0"
                    placeholder="Enter your course/job title"
                    type="text"
                    label="Course/Job Title"
                  />
                </div>
                <div className="grid mb-2 gap-2">
                  <FormInput
                    name="country"
                    className="ring-0"
                    placeholder="Enter your country"
                    type="text"
                    label="Country"
                  />
                </div>
              </>
            )}
            {formstate === "institution" && (
              <>
                <div className="grid mb-2 gap-2">
                  <FormInput
                    name="institutionName"
                    className="ring-0"
                    placeholder="Enter your institution name"
                    type="text"
                    label="Institution Name"
                  />
                </div>
                <div className="grid mb-2 grid-cols-2 gap-2">
                  <div className="col-span-1">
                    <FormInput
                      name="languageCourses"
                      className="ring-0"
                      placeholder="Enter language courses offered"
                      type="text"
                      label="Language Courses Offered"
                    />
                  </div>
                  <div className="col-span-1">
                    <FormInput
                      name="fees"
                      className="ring-0"
                      placeholder="Enter course fees (optional)"
                      type="text"
                      label="Course Fees"
                    />
                  </div>
                </div>
                <div className="grid mb-2 gap-2">
                  <FormInput
                    name="country"
                    className="ring-0"
                    placeholder="Enter your country"
                    type="text"
                    label="Country"
                  />
                </div>
              </>
            )}
            {/* File Upload (Resume for Mentors, Accreditation for Colleges) */}

            {/* Description Textarea */}
            <div className="grid mb-2 gap-2">
              <TextareaInput
                name="description"
                className="ring-0"
                placeholder="Enter your description"
                type="text"
                label="Description"
              />
            </div>
            {/* Submit Button */}
            <div className="w-full">
              <SubmitFrom
                type="submit"
                className="w-full"
                text="Submit"
                variant="default"
                btnsize="default"
              />
            </div>
          </FormContainer>
        </div>
      </div>
    </div>
  );
};

export default UserFormSubmission;
