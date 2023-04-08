import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-toastify";
import image from '../../../Assets/login.jpg'

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
  // console.log(imgHostKey);

  // const [createdUserEmail, setCreatedUserEmail] = useState('')

  const handleSignUp = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const phoneNumber = data.phoneNumber;
    const role = data.role;
    const image = data.img;

    console.log(phoneNumber, role, name, password, image);

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

            const photoURL = imgData.data.url;

            updateUserDetails(name, photoURL);
            // saveUsers(name, email, photoURL);

            if (imgData.success) {

              const addedUser = {
                name,
                email,
                role,
                phone: phoneNumber,
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
                  if(result){
                    // navigate("/");
                    toast.success("Registration successful");
                  }

                  
                });
            }
          });
      })
      .catch((error) => {
        console.error(error);
        // setPasswordError((error.message).slice(22,36));
        if (error) {
          toast.error(error.message.slice(22, 42));
        }
      });
  };








  const updateUserDetails = (name, photoURL) => {
    updateUser(name, photoURL)
      .then(() => {
        toast.success('Profile Updated');
      })
      .catch((error) => {
        console.error(error);
      });
  };














  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 md:my-12 lg:px-16 xl:px-32">
      <div className="flex items-center">
        <div className="space-y-2">
          {/* <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div>Vivamus in nisl metus? Phasellus.</div> */}
          <img src={image} alt="" />
        </div>
        <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
      </div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-xl ">
        
      <div className="flex justify-around py-5">
				<h3 className="text-2xl font-bold text-center  text-gray-400">Sign Up</h3>
				<Link to='/login' className="text-2xl font-bold text-center">Login</Link>
				</div>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="text-sm">
            <label className="flex m-2 dark:text-black">Name</label>
            <input
              type="text"
              {...register("name", {
                required: "Name is requires",
              })}
              placeholder="Name"
              name="name"
              className="input input-bordered w-full px-4 py-3 rounded-md  "
            />
          </div>

          <div className="text-sm">
            <label className="flex m-2 dark:text-black">Email</label>
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
              })}
              placeholder="Email"
              name="email"
              className="input input-bordered w-full px-4 py-3 rounded-md  "
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="mt-3 ms-1 text-sm">
            <label className="flex m-2 dark:text-black ">Password</label>
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
              className="input input-bordered w-full px-4 py-3 rounded-md  "
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="mt-3 ms-1 text-sm">
            <label className="flex m-2 dark:text-black ">Phone number</label>
            <input
              type="text"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              placeholder="Number"
              name="phoneNumber"
              className="input input-bordered w-full px-4 py-3 rounded-md  "
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div className="">
            <label className="label">
              <span className="label-text">Who are you ?</span>
            </label>
            <select
              className="input input-bordered md:w-96"
              type="name"
              {...register("role", {})}
            >
              <option>Student</option>
              <option>Teacher</option>
            </select>
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div className="">
            <label className="label">
              <span className="label-text">Photo </span>
            </label>
            <input
              type="file"
              {...register("img", {
                required: "Photo is Required",
              })}
              className="input input-bordered md:w-96"
            />
            {errors.img && <p className="text-red-500">{errors.img.message}</p>}
          </div>

          <input
            className="btn my-5 btn-primary w-full p-3 text-center rounded-full "
            value="Signup"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="text-lg text-center sm:px-6">
          Already have an account?
          <Link to="/login" className="hover:underline mx-2">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
