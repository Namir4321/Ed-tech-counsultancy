import FormInput from "@/components/Form/FormInput";
import React from "react";
import TextareaInput from "@/components/Form/TextareaInput";
import FormContainer from "@/components/Form/FormContainer";
import SubmitFrom from "@/components/Form/SubmitForm";
import DropDownForm from "@/components/Form/DropDownForm";
import { Input } from "@/components/ui/input";
import DropDownPosition from "@/components/Dashboard/User/DropDownPosition";
const UserForm = ({ usertype }) => {
  console.log(usertype);
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="grid gap-2">
          <FormContainer action="">
            <div className="grid mb-2 gap-2">
              <FormInput
                name="name"
                className="ring-0"
                placeholder="Enter your full name"
                type="text"
                label="Full Name"
              />
            </div>
            {/* <Input
              name="type"
              className="ring-0 "
              placeholder="Enter your full name"
              type="text"
              label=""
              value={usertype}
              readOnly
            /> */}

            <div className="grid mb-2 gap-2">
              <FormInput
                name="email"
                className="ring-0"
                placeholder="Enter your email"
                type="email"
                label="Email"
              />
            </div>
            <div>
              <div className="grid mb-2 grid-cols-2 gap-2">
                <div className="col-span-1">
                  <FormInput
                    name="Code"
                    className="ring-0"
                    placeholder="Enter your code"
                    type="Number"
                    label="Code (+91)"
                  />
                </div>
                <div className="col-span-1">
                  <FormInput
                    name="Phone"
                    className="ring-0"
                    placeholder="Enter your Number"
                    type="Number"
                    label="Phone"
                  />
                </div>
              </div>
            </div>
            <div className="grid mb-2 grid-cols-2 gap-2">
              <div className="col-span-1">
                <FormInput
                  name="country"
                  className="ring-0"
                  placeholder="Enter your country"
                  type="text"
                  label="Country"
                />
              </div>
              <div className="col-span-1 mt-7">
                <DropDownPosition menu={["Study Visa","Collage Mentor","Bussiness Mentor"]}  />
              </div>
            </div>
            <div className="grid mb-2 gap-2">
              <TextareaInput
                name="description"
                className="ring-0"
                placeholder="Enter your description"
                type="text"
                label="Description"
              />
            </div>

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

export default UserForm;
