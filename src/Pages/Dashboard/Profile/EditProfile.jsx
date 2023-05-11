import { Button, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const {user,userInfo,setUserInfo} = useContext(AuthContext);
  const [updateUserInfo, setUpdateUserInfo] = useState(userInfo);
  const navigate = useNavigate();
  
  
  const handleUpdateInfo = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/users/update/${userInfo._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateUserInfo)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('updated User Successfully')
          e.target.reset();
          setUserInfo(updateUserInfo)
          navigate('/dashboard/admin/profile')

        }
      })

  }

  const handleInputChange = event => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = {...updateUserInfo};
    newUser[field] = value;
    setUpdateUserInfo(newUser)
  }

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
        <Button className="text-white font-semibold bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  rounded-lg text-sm px-3 py-1 text-center" type="submit">Update Info</Button>
      </form>
    </div>
  );
};

export default EditProfile;
