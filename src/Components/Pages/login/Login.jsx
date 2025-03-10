import TopLogo from "../Header/TopLogo";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/AuthContext";

const Login = () => {


  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth(); // Access the login function from the context

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneNumber.trim() || !password.trim()) {
      setError("Please enter both phone number and password.");
      return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append("phone", phoneNumber);
    formData.append("password", password);

     try {
      const response = await axios.post("https://elimagasht.net/api/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log(response.data);

        // Store the token in sessionStorage
        localStorage.setItem("authToken", response.data[0].token);

        const { token, name } = response.data[0]; // Assuming the response contains name and token
        const user = { name }; // Store only the user data you need

        // Save user and token in AuthContext and localStorage
        login(user, token);


        // Show SweetAlert2 popup
        Swal.fire({
          title: "خوش آمدید",
          text: "شما با موفقیت وارد شدید",
          icon: "success",
          // confirmButtonText: "Go to Dashboard",
        }).then(() => {
          // Redirect to the homepage after the alert is closed
          navigate("/");
        });
      }
      else {


        // Show SweetAlert2 popup
        Swal.fire({
          title: "ورود ناموفق",
          text: "اطلاعات ورود نادرست است",
          icon: "error",
          // confirmButtonText: "Go to Dashboard",
        }).then(() => {
          // Redirect to the homepage after the alert is closed
          // navigate("/");
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="wrapper p-0 m-0 flex justify-center items-center flex-col bg-gradient-to-t from-[#973b26] to-[#db7645] w-[100vw] h-[100vh]">
        <div className="max-w-[1250px] w-[95%] h-[600px] de:mt-[100px] mo:mt-[130px] bg-gradient-to-t from-[#cac8c3] relative p-[30px] flex mo:flex-col de:flex-row justify-end items-center via-[#6e828d] rounded-2xl to-[#6e828d] shadow-xl shadow-black/20">
          <Link className="w-[45px] h-[45px] f rounded-full de:hover:w-[100px] mo:h transition-all duration-500 group  bg-[#bdcacf] absolute top-5 right-5 mo:right- cursor-pointer z-10"
            to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="de:group-hover:opacity-0 transition-all delay-300 de:group-hover:delay-0 duration-200"
            >
              <path
                d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.01 2.09 7.3 3.17 6.46L8.56 2.26C10.18 1 12.77 0.940001 14.45 2.12L20.63 6.45C21.82 7.28 22.75 9.06 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.44L4.09 7.64C3.38 8.2 2.75 9.47 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.55 20.56 8.22 19.77 7.68L13.59 3.35C12.45 2.55 10.57 2.59 9.48 3.44Z"
                fill="#414A53"
              />
              <path
                d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
                fill="#414A53"
              />
            </svg>
            <span className="opacity-0 de:group-hover:opacity-100 transition-all duration-500 text-[18px] text-[#414A53] absolute  ">خانه</span>

          </Link>
          <img
            src="./public/image/SIGN-UP.png"
            className="de:h-[750px] mo:h-[300px] absolute de:bottom-[-10px] mo:bottom-[480px] de:right-[-20px]"
            alt=""
          />
          <form onSubmit={handleSubmit} className="de:w-[50%] mo:w-[100%] de:h-full mo:h-[80%] p-[20px] flex justify-between mo:mb-[30px] de:mb-[0] items-center flex-col backdrop-blur-xl backdrop-brightness-125 rounded-2xl ">
            <div className="w-full h-[35%] flex justify-start  items-center flex-col">
              <h1 className="de:text-[50px] mo:text-[35px] text-[#261c18] font-bold">
                خوش آمدید !
              </h1>
              <span className="text-[20px] text-[#261c18] font-light">
                ورود به سایت
              </span>
            </div>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            <div className="w-full flex justify-start gap-[50px] flex-col items-center h-[50%]">
              <div className="w-[90%] relative group transition-all duration-300  ">
                <div className="h-[38px] w-[120px] border-[1px] rounded-md text-[14px] absolute bottom-[35px] right-[20px]  transition-all duration-300 bg-[#91a7b4]  group-focus-within:w-[100px] group-focus-within:h-[35px] animate-fade-down border-solid border-gray-300 f group-focus-within:text-[12px]  group-focus-within:bottom-[43px] text-[#261c18] font-light">
                  شماره تلفن
                </div>
                <input
                  type="text"
                  name=""
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-transparent pt-[10px] font-light text-[#261c18] border-gray-300 border-solid border-[1px] h-[50px] w transition-all duration-200 peer shadow-lg  text-right px-[20px] rounded-lg focus:border-gray-200 outline-none caret-gray-200 focus:ring-0"
                  id=""
                />
              </div>
              <div className="w-[90%] relative group transition-all duration-100  ">
                <div className="h-[38px] w-[120px] border-[1px] rounded-md text-[14px]  absolute bottom-[35px] right-[20px]  transition-all duration-300 bg-[#91a7b4]  group-focus-within:w-[100px] group-focus-within:h-[35px] animate-fade-down border-solid border-gray-300 f group-focus-within:text-[12px]  group-focus-within:bottom-[43px] text-[#261c18] font-light">
                  رمز عبور
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent pt-[10px] font-light  text-[#261c18] border-gray-300 border-solid border-[1px] h-[50px] w transition-all duration-200 peer shadow-lg  text-right px-[20px] rounded-lg focus:border-gray-200 outline-none caret-gray-200 focus:ring-0"
                  id=""
                />
              </div>
            </div>
            <div className="w-full flex justify-center gap-[10px] items-center h-[10%]">
              <button className="w-[200px] hover:bg-sky-800 transition-all duration-200 flex justify-center items-center hover:shadow-lg shadow-black h-[45px] text-gray-200 bg-[#5c80a2] rounded-lg" type="submit">
                ورود به سایت
              </button>
              <Link
                to="/sign-up"
                className="w-[120px] hover:bg-[#5c80a2] text-sky-800 flex justify-center items-center transition-all duration-200 hover:shadow-lg shadow-black h-[45px] border-solid border-[1px] hover:text-gray-200 border-[#5c80a2] rounded-lg cursor-pointer"
              >
                ثبت نام
              </Link>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
