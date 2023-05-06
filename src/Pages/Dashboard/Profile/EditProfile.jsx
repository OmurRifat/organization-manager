import { Button, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const EditProfile = () => {
  const {handleUpdateInfo, handleInputChange} = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-black font-bold text-3xl pl-3">Edit Profile</h2>
      <form
        onSubmit={handleUpdateInfo}
        className="flex flex-col gap-4 mt-10 lg:px-24"
      >
        <div>
          <div className="mb-2 block">
            <Label value="Your Name" />
          </div>
          <TextInput
            onBlur={handleInputChange}
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name"
            required={true}
            shadow={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label value="Your Phone" />
          </div>
          <TextInput
            onBlur={handleInputChange}
            name="phone"
            id="phone"
            type="phone"
            placeholder="Enter your Phone Number"
            required={true}
            shadow={true}
          />
        </div>

        <Button type="submit">Update Info</Button>
      </form>
    </div>
  );
};

export default EditProfile;
