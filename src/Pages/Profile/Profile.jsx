import React, { useContext, useRef } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user, profileUpdater, setLoading } = useContext(AuthContext);

  const photoUrlRef = useRef(user?.photoURL);
  const nameRef = useRef(user?.displayName);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = nameRef.current.value;
    const userPhoto = photoUrlRef.current.value;

    const profile = {
      displayName: userName,
      photoURL: userPhoto,
    };

    // ** Update profile

    const userProfileUpdate = async () => {
      try {
        await profileUpdater(profile);
        setLoading(false);
        toast.success("Your profile has been updated");
      } catch (error) {
        toast.error("Profile update caught an error");
      }
    };
    userProfileUpdate();
  };

  return (
    <div className="grid lg:grid-cols-12">
      <div className="lg:col-start-1 lg:col-end-6">
        <div className="flex justify-center items-center pt-8">
          <div className="flex flex-col max-w-md p-6  rounded-md sm:p-10 bg-gray-100 text-gray-900">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">User Profile</h1>
              <p className="text-sm text-gray-400">Edit your profile</p>
            </div>
            <form
              onSubmit={handleSubmit}
              noValidate=""
              action=""
              className="space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Name
                  </label>
                  <input
                    ref={nameRef}
                    defaultValue={user?.displayName}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    defaultValue={user?.email}
                    readOnly
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      PhotoURL
                    </label>
                  </div>
                  <input
                    defaultValue={user?.photoURL}
                    ref={photoUrlRef}
                    type="text"
                    name="photourl"
                    id="photourl"
                    placeholder="photourl"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="lg:col-start-7 lg:col-end-12">
        <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src={user?.photoURL}
              alt=""
              className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
              <span className="text-sm dark:text-gray-400">
                {user?.displayName}
              </span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-400">{user?.email}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
