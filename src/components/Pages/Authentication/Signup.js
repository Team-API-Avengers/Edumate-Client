import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import SignUpAnimation from "../../Assets/Animation/SignUpAnimation.json";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
// import image from "../../Assets/login.jpg";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);

  const [signUpError, setSignUpError] = useState("");

  const navigate = useNavigate();

  //! from .env.local file====>
  const imgHostKey = process.env.REACT_APP_Imgbb_key;
  console.log(imgHostKey);

  // const [createdUserEmail, setCreatedUserEmail] = useState('')

  const handleSignUp = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const phone = data.phoneNumber;
    const role = data.role;
    const image = data.img;

    console.log(phone, role, name, password, image);

    createUser(email, password)
      .then((result) => {
        // const user = result.user;

        // console.log(image)

        //! ==========< Image Hosting >==========

        const formData = new FormData();

        formData.append("image", image[0]);

        // console.log(formData)

        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgData) => {
            console.log(imgData);

            const photoURL = imgData?.data?.url;

            updateUserDetails(name, photoURL);
            // saveUsers(name, email, photoURL);

            if (imgData.success) {
              const addedUser = {
                name,
                email,
                role,
                phone,
                image: imgData.data.url,
              };

              //! Save User info to the database....
              fetch("https://edumate-second-server.vercel.app/api/v1/user", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(addedUser),
              })
                .then((res) => res.json())
                .then((result) => {
                  if (result) {
                    navigate("/");
                    toast.success("Registration successful");
                  }
                });
            }
          });
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
        // setPasswordError((error.message).slice(22,36));
        if (error) {
          toast.error(error.message.slice(22, 42));
        }
      });
  };

  const updateUserDetails = (name, photoURL) => {
    updateUser(name, photoURL)
      .then(() => {
        toast.success("Profile Updated");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 md:my-12 lg:px-16 xl:px-32 text-[#1AA3D0] dark:text-[#00A99D]">
      <div className="flex items-center">
        <div className="space-y-2 w-full">
          <h1 id="title" className="text-5xl mb-5 font-bold">
            Register
          </h1>
          <p className="mb-5 text-2xl text-[#1AA3D0] dark:text-[#00A99D]">Lets create a better world</p>
          <Lottie animationData={SignUpAnimation} loop={true}></Lottie>
        </div>
        <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
      </div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl  ">
        <div className="flex justify-around py-5">
          <h3 className="text-2xl font-bold text-center rounded-lg p-3 text-[#1AA3D0] dark:text-[#00A99D]">Sign Up</h3>
          <Link
            to="/authentication/login"
            className="text-2xl border rounded-lg shadow-md dark:shadow-slate-50 p-3 font-bold text-center"
          >
            Login
          </Link>
        </div>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="text-sm">
              <label className="flex m-2  dark:text-[#00A99D]">Name</label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is requires",
                })}
                placeholder="Name"
                name="name"
                className="input input-bordered text-black w-full px-4 py-3 rounded-full border-2  border-[#1AA3D0] dark:border-none focus:outline-none focus:border-[#00A99D]  "
              />
            </div>

            <div className="text-sm">
              <label className="flex m-2  dark:text-[#00A99D]">Email</label>
              <input
                type="text"
                {...register("email", {
                  required: "Email is required",
                })}
                placeholder="Email"
                name="email"
                className="input input-bordered w-full text-black px-4 py-3 rounded-full border-2  border-[#1AA3D0] dark:border-none focus:outline-none focus:border-[#00A99D] "
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>

            <div className="mt-3 ms-1 text-sm">
              <label className="flex m-2  dark:t#00A99D]">Password</label>
              <input
                type="text"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "password must be 6 character long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message: "Password must be strong",
                  },
                })}
                placeholder="Password"
                name="password"
                className="input input-bordered text-black w-full px-4 py-3 rounded-full border-2  border-[#1AA3D0] dark:border-none focus:outline-none focus:border-[#00A99D] "
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>

            <div className="mt-3 ms-1 text-sm">
              <label className="flex m-2  dark:text-[#00A99D]">Phone number</label>
              <input
                type="text"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
                placeholder="Number"
                name="phoneNumber"
                className="input input-bordered text-black w-full px-4 py-3 rounded-full border-2  border-[#1AA3D0] dark:border-none focus:outline-none focus:border-[#00A99D] "
              />
              {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
            </div>
          </div>

          <div className="text-black">
            <label className="label dark:t#00A99D]">
              <span className="label-text mx-2 text-[#1AA3D0] dark:text-[#00A99D]">Who are you ?</span>
            </label>
            <select
              className="input input-bordered text-black md:w-96 border-2  border-[#1AA3D0] dark:border-none focus:outline-none focus:border-[#00A99D]"
              type="name"
              {...register("role", {})}
            >
              <option>Student</option>
              <option>Teacher</option>
            </select>
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>

          <div className="">
            <label className="label">
              <span className="label-text mx-2 text-[#1AA3D0] dark:text-[#00A99D]">Photo </span>
            </label>
            <input
              type="file"
              {...register("img", {
                required: "Photo is Required",
              })}
              className="input input-bordered py-2 md:w-96 border-2  border-[#1AA3D0] dark:border-none focus:outline-none focus:border-[#00A99D]"
            />
            {errors.img && <p className="text-red-500">{errors.img.message}</p>}
          </div>

          <input
            className="btn my-5 bg-[#1AA3D0] dark:bg-[#00A99D] hover:bg-[#00A99D] dark:hover:bg-[#1AA3D0] w-full p-3 text-center rounded-full border-0"
            value="Signup"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="text-lg text-center sm:px-6 dark:text-[#00A99D]">
          Already have an account?
          <Link
            to="/authentication/login"
            className="text-2xl font-bold hover:underline mx-2 text-[#1AA3D0] dark:text[#00A99D]"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
