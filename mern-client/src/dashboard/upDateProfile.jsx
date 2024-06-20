import React, { useState } from "react";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleUpdateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("photo", photo);

      // Assuming you have an API endpoint for updating the profile
      const response = await fetch("YOUR_API_ENDPOINT/updateProfile", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Profile updated successfully
        console.log("Profile updated successfully!");
      } else {
        // Handle error cases
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <p className="font-bold text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue-700">
            Update Profile
          </p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Photo</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              onChange={handlePhotoChange}
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpdateProfile}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
