import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import { GoogleAuthProvider, getAuth, sendPasswordResetEmail } from "firebase/auth";
import Lottie from "lottie-react";
import LoginAnimation from "../../Assets/Animation/LoginAnimation.json";
import { toast } from "react-toastify";
// import ReCAPTCHA from "react-google-recaptcha";
import app from "../../Firebase/Firebase.init";

const auth = getAuth(app);
const Login = () => {
  const [userEmail, setUserEmail] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");

  // const [loginUserEmail, setLoginUserEmail] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // const [recaptcha, setRecaptcha] = useState();

  // console.log("recaptcha", recaptcha);

  // const captchaRef = useRef(null);

  // //! react-google-recaptcha
  // function onChange(value) {
  //   // console.log("Captcha value:", value);
  //   if (value === null) {
  //     return toast.error("You are a root");
  //   } else {
  //     setRecaptcha(value);
  //     window.setTimeout(function () {
  //       // <-- remove this delay and the error goes away
  //       window.grecaptcha.reset();
  //     });
  //   }
  // }

  //! Email Login Form
  const handleLogin = (data) => {
    console.log(data);

    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        // const user = result.user;
        // console.log(user);

        if (result) {
          toast.success("Login successful");
          navigate("/");

          // navigate(from, { replace: true });
          // navigate(`${from}`)
          // setLoginUserEmail(data.email);
        }
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message);
        toast.error("Email Failed to login");
      });
  };

  //! Google Login Form
  const handleGoogle = () => {
    const role = "Teacher";

    signInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const addedUser = {
          name: user?.displayName,
          email: user?.email,
          role,
          phone: 0,
          image: user?.photoURL,
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
            console.log(result.data);
            if (result) {
              toast.success("Google Login successful");
              // navigate(from, { replace: true });
              navigate(`${from}`);
            }
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to login");
      });
  };

  //! handle Forget Password

  const handleEmailForResetPassword = (e) => {
    const email = e.target.value;
    setUserEmail(email);

    console.log(email);
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      toast.error("Please enter your email address");
    } else {
      sendPasswordResetEmail(auth, userEmail)
        .then(() => {
          toast.info("password reset sent");
        })
        .catch((er) => {
          toast.error(er.message);
          console.error(er);
        });
    }
  };

  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-20 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-[#1AA3D0] dark:text-[#00A99D]">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 id="title" className="text-4xl font-bold leading-tight lg:text-5xl">
              Please Do it!
            </h2>
            {/* <div className="hidden lg:flex justify-center">
              <ReCAPTCHA
                sitekey="6LfZE2glAAAAACGKH4fqAYxMk2cMqyPFihFIAo5C"
                onChange={onChange}
                ref={captchaRef}
              />
            </div> */}
          </div>
          <div className="mt-10">
            <Lottie animationData={LoginAnimation} loop={true}></Lottie>
          </div>
        </div>
        <div className="w-full mt-36 max-w-md p-8 space-y-3 rounded-xl   ">
          <div className="flex justify-around py-5">
            <Link
              to="/authentication/signup"
              className="text-2xl border rounded-lg shadow-md dark:shadow-slate-50 border-gray-600 p-3 font-bold text-center"
            >
              Sign Up
            </Link>
            <h3 className="text-2xl text-[#1AA3D0] dark:text-[#00A99D] rounded-lg border-gray-600 p-3 font-bold text-center">
              Login
            </h3>
          </div>

          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="text-sm ">
              <label className="flex m-2 dark:text-[#00A99D]">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                placeholder="Email address"
                // onBlur={(e) => {
                //   console.log("Input field blurred", e.target.value);
                //     }}
                onBlur={handleEmailForResetPassword}
                className="input input-bordered w-full px-4 py-3 rounded-md dark:bg-white border-2  border-[#1AA3D0] dark:border-none focus:outline-none focus:border-[#00A99D]"
              />
              {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
            </div>
            <div className="mt-3 ms-1 text-sm ">
              <label className="flex m-2  dark:text-[#00A99D]">Password</label>
              <input
                type="text"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
                placeholder="Password"
                name="password"
                className="input input-bordered w-full px-4 py-3 rounded-md dark:bg-white border-2  border-[#1AA3D0] dark:border-none focus:outline-none focus:border-[#00A99D]"
              />
              {errors.password && <p className="text-red-600 mb-3">{errors.password?.message}</p>}
              <div className="flex mt-2 mb-5 text-xs font-bold">
                <p className="cursor-pointer hover:underline" onClick={handleForgetPassword}>
                  Forgot Password?
                </p>
              </div>
            </div>
            <input
              className="btn btn-primary w-full p-3 text-center rounded-full bg-[#1AA3D0] dark:bg-[#00A99D] hover:bg-[#00A99D] dark:hover:bg-[#1AA3D0] border-0"
              value="Login"
              type="submit"
            />
            <div>{loginError && <p className="text-red-600">{loginError}</p>}</div>
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 "></div>
            <p
              onClick={handleGoogle}
              className="btn btn-outline text-white bg-gradient-to-r from-green-400 to-blue-500 ... border-none w-full px-3 text-sm  rounded-full border-0"
            >
              Login with Google
            </p>
            <div className="flex-1 h-px sm:w-16 "></div>
          </div>

          {/* <div className="flex justify-center space-x-4">
					<button aria-label="Log in with Google" className="p-3 rounded-sm">
						
					</button>
					<button aria-label="Log in with Twitter" className="p-3 rounded-sm">
						<BsTwitter className="text-2xl" />
					</button>
					<button aria-label="Log in with GitHub" className="p-3 rounded-sm">
						<BsGithub className="text-2xl" />
					</button>
				</div> */}
          <p className="text-xl text-center sm:px-6 ">
            Don't have an account?
            <Link to="/authentication/signup" className="hover:underline mx-2">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
