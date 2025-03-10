import { Link, useNavigate } from "react-router-dom";
import TopLogo from "../Header/TopLogo";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value); // Allow typing anything

    if (value.trim() === "") {
      setFullNameError("");
      return;
    }

    const regex = /^[a-zA-Zآ-ی\s]+$/;
    if (!regex.test(value)) {
      setFullNameError("فقط حروف فارسی و انگلیسی مجاز است!");
    } else if (value.length < 5) {
      setFullNameError("نام و نام خانوادگی باید حداقل ۵ حرف باشد!");
    } else {
      setFullNameError(""); // Clear error if valid
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value); // Allow typing anything

    if (value.trim() === "") {
      setPhoneError("");
      return;
    }

    // Validate phone number: Must start with 09, only numbers, and 11 digits
    const regex = /^09\d{9}$/;
    if (!regex.test(value)) {
      setPhoneError("شماره تلفن را صحیح وارد کنید");
    } else {
      setPhoneError(""); // Clear error if valid
    }
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);  // Update password state
  
    if (value.trim() === "") {
      setPasswordError("");  // No error when input is empty
      return;
    }
  
    // Validate password: Must be at least 8 characters
    if (value.length < 8) {
      setPasswordError("رمز عبور باید حداقل 8 کاراکتر باشد.");
    } else {
      setPasswordError(""); // Clear error if password is valid
    }
  
    // Revalidate repeat password on password change
    if (repeatPassword && repeatPassword !== value) {
      setRepeatPasswordError("رمز عبور وارد شده با تکرار رمز عبور یکسان نیست.");
    } else {
      setRepeatPasswordError(""); // Clear error if repeat password matches
    }
  };
  
  const handleRepeatPasswordChange = (e) => {
    const value = e.target.value;
    setRepeatPassword(value);  // Update repeat password state
  
    if (value.trim() === "") {
      setRepeatPasswordError("");  // No error when input is empty
      return;
    }
  
    // Validate repeat password: Must match the original password
    if (value !== password) {
      setRepeatPasswordError("رمز عبور وارد شده با تکرار رمز عبور یکسان نیست.");
    } else {
      setRepeatPasswordError(""); // Clear error if repeat password matches
    }
  };
  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation here before submitting

    if (!fullName.trim()) {
      setFullNameError("نام و نام خانوادگی الزامی است!");
    }
    if (!phoneNumber.trim()) {
      setPhoneError("شماره تلفن الزامی است!");
    }
    if (!password.trim()) {
      setPasswordError("رمز عبور الزامی است!");
    }
    if (!repeatPassword.trim()) {
      setRepeatPasswordError("تکرار رمز عبور الزامی است!");
    }

    // Prevent submission if there are any errors
    if (fullNameError || phoneError || passwordError || repeatPasswordError) {
      return;
    }

    // Create FormData object for mimicking Postman request
    const formData = new FormData();
    formData.append('full_name', fullName);
    formData.append('phone', phoneNumber);
    formData.append('password', password);
    formData.append('password_confirmation', repeatPassword);

    try {
      const response = await axios.post('https://elimagasht.net/api/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Tell the backend it's form data
        },
      });

      // Redirect to the login page after successful registration
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
      alert("There was an error during signup!");
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
        <div className="max-w-[1250px] w-[95%] de:h-[600px] mo:h-[700px] de:mt-[100px] mo:mt-[130px] bg-gradient-to-t from-[#cac8c3] relative p-[30px] flex mo:flex-col de:flex-row justify-end items-center via-[#6e828d] rounded-2xl to-[#6e828d] shadow-xl shadow-black/20">
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
            src="./public/image/login-new.png"
            className="de:w-[1000px]  mo:w-[500px]  absolute de:bottom-[-24px] mo:bottom-[470px] de:right-[-180px]"
            alt=""
          />
          <form className="de:w-[50%] mo:w-[100%] de:h-full mo:h-[85%] p-[20px] flex justify-between  items-center flex-col backdrop-blur-xl backdrop-brightness-125 rounded-2xl ">
            <div className="w-full mo:h-[30%] de:h-[35%] flex justify-start  items-center flex-col">
              <h1 className="de:text-[50px] mo:text-[35px] text-[#261c18] font-bold">
                خوش آمدید !
              </h1>
              <span className="text-[20px] text-[#261c18] font-light">
                ورود به سایت
              </span>
            </div>
            <div className="w-full flex justify-start gap-[30px] flex-col items-center h-[80%]">
              <div className="w-[90%] relative group transition-all duration-300  ">
                <div className="h-[38px] w-[120px] border-[1px] rounded-md text-[14px] absolute bottom-[35px] right-[20px]  transition-all duration-300 bg-[#91a7b4]  group-focus-within:w-[100px] group-focus-within:h-[35px] animate-fade-down border-solid border-gray-300 f group-focus-within:text-[12px]  group-focus-within:bottom-[43px] text-[#261c18] font-light">
                  نام و نام خانوادگی
                </div>
                <input
                  type="text"
                  onChange={handleFullNameChange}
                  value={fullName}
                  name=""
                  className="bg-transparent font-light text-[#261c18] border-gray-300 border-solid border-[1px] h-[50px] w transition-all duration-200 peer shadow-lg  text-right px-[20px] rounded-lg focus:border-gray-200 outline-none caret-gray-200 focus:ring-0"
                  id=""
                />
                {fullNameError  && <p className="text-orange-600 de:text-sm mo:text-xs top-[55px] left-0 absolute">{fullNameError}</p>}
              </div>
              
              <div className="w-[90%] relative group transition-all duration-300  ">
                <div className="h-[38px] w-[120px] border-[1px] rounded-md text-[14px] absolute bottom-[35px] right-[20px]  transition-all duration-300 bg-[#91a7b4]  group-focus-within:w-[100px] group-focus-within:h-[35px] animate-fade-down border-solid border-gray-300 f group-focus-within:text-[12px]  group-focus-within:bottom-[43px] text-[#261c18] font-light">
                  شماره تلفن
                </div>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  name=""
                  className="bg-transparent font-light text-[#261c18] border-gray-300 border-solid border-[1px] h-[50px] w transition-all duration-200 peer shadow-lg  text-right px-[20px] rounded-lg focus:border-gray-200 outline-none caret-gray-200 focus:ring-0"
                  id=""
                />
                {phoneError && <p className="text-orange-600 de:text-sm mo:text-xs top-[55px] left-0 absolute">{phoneError}</p>}

              </div>
              <div className="w-[90%] relative group transition-all duration-300  ">
                <div className="h-[38px] w-[120px] border-[1px] rounded-md text-[14px] absolute bottom-[35px] right-[20px]  transition-all duration-300 bg-[#9fb3bd]  group-focus-within:w-[100px] group-focus-within:h-[35px] animate-fade-down border-solid border-gray-300 f group-focus-within:text-[12px]  group-focus-within:bottom-[43px] text-[#261c18] font-light">
                  رمز عبور
                </div>
                <input
                   type="password"
                   value={password}
                   onChange={handlePasswordChange}
                  name=""
                  className="bg-transparent font-light text-[#261c18] border-gray-300 border-solid border-[1px] h-[50px] w transition-all duration-200 peer shadow-lg  text-right px-[20px] rounded-lg focus:border-gray-200 outline-none caret-gray-200 focus:ring-0"
                  id=""
                />
                {passwordError  && <p className="text-orange-600 de:text-sm mo:text-xs top-[55px] left-0 absolute">{passwordError }</p>}
                
              </div>
              <div className="w-[90%] relative group transition-all duration-100  ">
                <div className="h-[38px] w-[120px] border-[1px] rounded-md text-[14px]  absolute bottom-[35px] right-[20px]  transition-all duration-300 bg-[#b6c4ca]  group-focus-within:w-[100px] group-focus-within:h-[35px] animate-fade-down border-solid border-gray-200 f group-focus-within:text-[12px]  group-focus-within:bottom-[43px] text-[#261c18] font-light">
                  تکرار رمز عبور
                </div>
                <input
                     type="password"
                     value={repeatPassword}
                     onChange={handleRepeatPasswordChange}
                  name=""
                  className="bg-transparent font-light  text-[#261c18] border-gray-200 border-solid border-[1px] h-[50px] w transition-all duration-200 peer shadow-lg  text-right px-[20px] rounded-lg focus:border-gray-200 outline-none caret-gray-200 focus:ring-0"
                  id=""
                />
                                {repeatPasswordError && <p className="text-orange-600 de:text-sm mo:text-xs top-[55px] left-0 absolute">{repeatPasswordError}</p>}

              </div>
            </div>
            <div className="w-full flex justify-center gap-[10px] items-center h-[10%]">
              <button className="w-[200px] hover:bg-sky-800 transition-all duration-200 flex justify-center items-center hover:shadow-lg shadow-black h-[45px] text-gray-200 bg-[#5c80a2] rounded-lg"
              onClick={handleSubmit} >
                ثبت نام
              </button>
              <Link
                to="/login"
                className="w-[120px] hover:bg-[#5c80a2] text-sky-800 flex justify-center items-center transition-all duration-200 hover:shadow-lg shadow-black h-[45px] border-solid border-[1px] hover:text-gray-200 border-[#5c80a2] rounded-lg cursor-pointer"
              >
                ورود به سایت
              </Link>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
