import { React, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoSearchOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { stepOneValidationSchema } from "../../utils/validations";
import { stepTwoValidationSchema } from "../../utils/validations";
import { stepThreeValidationSchema } from "../../utils/validations";
import { stepFourValidationSchema } from "../../utils/validations";

const Main = (index) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    full_name: "",
    gender: "",
    country_code: "",
    phone: "",
    birthday: "",
    address: "",
    street_address: "",
    apartment: "",
    city: "",
    state: "",
    zip_code: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handlePrevStep = (newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const handleNextStep = (newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);
  };

  const steps = [
    <StepOne key={0} next={handleNextStep} data={userData} />,
    <StepTwo
      key={1}
      prev={handlePrevStep}
      next={handleNextStep}
      data={userData}
    />,
    <StepThree
      key={2}
      prev={handlePrevStep}
      next={handleNextStep}
      data={userData}
    />,
    <StepFour
      key={3}
      prev={handlePrevStep}
      next={handleNextStep}
      data={userData}
    />,
    <SignedUp key={4} />,
  ];

  return (
    <>
      <div key={index}>{steps[currentStep]}</div>
    </>
  );
};

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mx-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex justify-between mb-4">
          <ul className="flex">
            <li className="-mb-px mr-1">
              <a
                className="bg-white inline-block border-[#EF498F] border-b py-2 px-4 text-[#1A0710D9] font-[400px] leading-[24px]"
                href="#"
              >
                Register
              </a>
            </li>
            <li className="mr-1">
              <Link
                to={"/login"}
                className="bg-white inline-block py-2 px-4 text-gray-500 hover:text-blue-800 font-semibold"
                href="#"
              >
                Log in
              </Link>
            </li>
          </ul>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.70699 5.29298C6.51839 5.11082 6.26579 5.01003 6.00359 5.01231C5.74139 5.01458 5.49058 5.11975 5.30517 5.30516C5.11976 5.49057 5.01459 5.74138 5.01232 6.00358C5.01004 6.26578 5.11083 6.51838 5.29299 6.70698L10.586 12L5.29299 17.293C5.19748 17.3852 5.1213 17.4956 5.06889 17.6176C5.01648 17.7396 4.98889 17.8708 4.98774 18.0036C4.98659 18.1364 5.01189 18.268 5.06217 18.3909C5.11245 18.5138 5.1867 18.6255 5.28059 18.7194C5.37449 18.8133 5.48614 18.8875 5.60904 18.9378C5.73193 18.9881 5.86361 19.0134 5.99639 19.0122C6.12917 19.0111 6.26039 18.9835 6.38239 18.9311C6.5044 18.8787 6.61474 18.8025 6.70699 18.707L12 13.414L17.293 18.707C17.4816 18.8891 17.7342 18.9899 17.9964 18.9877C18.2586 18.9854 18.5094 18.8802 18.6948 18.6948C18.8802 18.5094 18.9854 18.2586 18.9877 17.9964C18.9899 17.7342 18.8891 17.4816 18.707 17.293L13.414 12L18.707 6.70698C18.8891 6.51838 18.9899 6.26578 18.9877 6.00358C18.9854 5.74138 18.8802 5.49057 18.6948 5.30516C18.5094 5.11975 18.2586 5.01458 17.9964 5.01231C17.7342 5.01003 17.4816 5.11082 17.293 5.29298L12 10.586L6.70699 5.29298Z"
              fill="#1A0710"
              fillOpacity="0.85"
            />
          </svg>
        </div>

        <div className="flex items-center justify-start gap-2 mb-4">
          <div className="flex justify-center items-center bg-[#F6F6F6] p-2 rounded-[50%] w-[48px] h-[48px]">
            <FaApple />
          </div>
          <div className="flex justify-center items-center bg-[#F6F6F6] p-2 rounded-[50%] w-[48px] h-[48px]">
            <FaFacebookF className="text-blue-700" />
          </div>
          <div className="flex justify-center items-center bg-[#F6F6F6] p-2 rounded-[50%] w-[48px] h-[48px]">
            <FcGoogle />
          </div>
        </div>

        <div className="mb-4 text-gray-500">or register with email</div>

        <Formik
          initialValues={props.data}
          validationSchema={stepOneValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <Field
                className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                placeholder="Email address"
                name="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="mb-4">
              <div className="relative">
                <Field
                  className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="********"
                  name="password"
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <IoEyeOff className="text-gray-500" />
                  ) : (
                    <IoEye className="text-gray-500" />
                  )}
                </span>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
            </div>

            <div className="flex flex-auto items-center justify-center">
              <button
                className="w-full h-[56px] bg-[#5932EA] hover:bg-[#9962EF] py-2 mt-4 px-4 rounded-xl focus:outline-none focus:shadow-outline tracking-[0.15px] text-white font-[700] text-[16px] leading-[24px]"
                type="submit"
              >
                Create account
              </button>
            </div>

            <div className="mt-4">
              <Field type="checkbox" className="form-checkbox" name="check" />
              <span className="ml-2 text-gray-700">
                Send me news and promotions
              </span>
            </div>

            <p className="text-center text-gray-500 text-xs mt-4">
              By continuing I agree with the{" "}
              <a href="#" className="text-blue-500">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
              .
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mx-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex justify-between">
          <div className="flex mb-4 gap-2">
            <h1>Personal Information</h1>
            <h1 className="text-green-500 font-[700]">2 of 3</h1>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.70699 5.29298C6.51839 5.11082 6.26579 5.01003 6.00359 5.01231C5.74139 5.01458 5.49058 5.11975 5.30517 5.30516C5.11976 5.49057 5.01459 5.74138 5.01232 6.00358C5.01004 6.26578 5.11083 6.51838 5.29299 6.70698L10.586 12L5.29299 17.293C5.19748 17.3852 5.1213 17.4956 5.06889 17.6176C5.01648 17.7396 4.98889 17.8708 4.98774 18.0036C4.98659 18.1364 5.01189 18.268 5.06217 18.3909C5.11245 18.5138 5.1867 18.6255 5.28059 18.7194C5.37449 18.8133 5.48614 18.8875 5.60904 18.9378C5.73193 18.9881 5.86361 19.0134 5.99639 19.0122C6.12917 19.0111 6.26039 18.9835 6.38239 18.9311C6.5044 18.8787 6.61474 18.8025 6.70699 18.707L12 13.414L17.293 18.707C17.4816 18.8891 17.7342 18.9899 17.9964 18.9877C18.2586 18.9854 18.5094 18.8802 18.6948 18.6948C18.8802 18.5094 18.9854 18.2586 18.9877 17.9964C18.9899 17.7342 18.8891 17.4816 18.707 17.293L13.414 12L18.707 6.70698C18.8891 6.51838 18.9899 6.26578 18.9877 6.00358C18.9854 5.74138 18.8802 5.49057 18.6948 5.30516C18.5094 5.11975 18.2586 5.01458 17.9964 5.01231C17.7342 5.01003 17.4816 5.11082 17.293 5.29298L12 10.586L6.70699 5.29298Z"
              fill="#1A0710"
              fillOpacity="0.85"
            />
          </svg>
        </div>

        <Formik
          initialValues={props.data}
          validationSchema={stepTwoValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <Field
                className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Full Name"
                name="full_name"
              />
              <ErrorMessage
                name="full_name"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="flex items-center mb-4 gap-x-2">
              <p className="block text-gray-700 text-sm font-bold">Gender</p>
              <div className="relative">
                <label className="mb-2">
                  <Field
                    type="radio"
                    name="gender"
                    value="male"
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="ml-2">
                  <Field
                    type="radio"
                    name="gender"
                    value="female"
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
            </div>
            <ErrorMessage
              name="gender"
              component="div"
              className="text-red-500 text-xs"
            />

            <div className="flex text-[#1A0710A6] gap-x-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_132_31183)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM7 5.333C7 4.78072 7.44772 4.333 8 4.333H8.007C8.55928 4.333 9.007 4.78072 9.007 5.333C9.007 5.88528 8.55928 6.333 8.007 6.333H8C7.44772 6.333 7 5.88528 7 5.333ZM8 7C8.55228 7 9 7.44772 9 8V10.667C9 11.2193 8.55228 11.667 8 11.667C7.44772 11.667 7 11.2193 7 10.667V8C7 7.44772 7.44772 7 8 7Z"
                    fill="#1A0710"
                    fillOpacity="0.65"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_132_31183">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="text-[12px] text-[#1A0710A6] font-[700] leading-[20px]">
                This phone number and birthday are only visible to you
              </span>
            </div>

            <div className="flex justify-between relative my-2">
              <Field
                className="w-[30%] border rounded h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                placeholder="+***"
                name="country_code"
              />
              <ErrorMessage
                name="country_code"
                component="div"
                className="text-red-500 text-xs"
              />
              <Field
                className="w-[65%] border rounded h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                placeholder="Phone Number"
                name="phone"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="relative">
              <input
                className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="Birthday"
                name="birthday"
              />
              <span className="absolute inset-y-0 right-0 mr-10 pr-[-2px] flex items-center">
                Optional
              </span>
            </div>
            <span className="text-[13px] font-[400]">
              Let us know about your birthday so as not to miss a gift
            </span>

            <div className="flex flex-auto items-center justify-center mt-2">
              <button
                className="w-full h-[56px] bg-[#5932EA] hover:bg-[#9962EF] py-2 mt-4 px-4 rounded-xl focus:outline-none focus:shadow-outline tracking-[0.15px] text-white font-[700] text-[16px] leading-[24px]"
                type="submit"
              >
                Save Information
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const StepThree = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mx-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex justify-between">
          <div className="flex mb-4 gap-2">
            <h1>Add Address</h1>
            <h1 className="text-green-500 font-[700]">3 of 3</h1>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.70699 5.29298C6.51839 5.11082 6.26579 5.01003 6.00359 5.01231C5.74139 5.01458 5.49058 5.11975 5.30517 5.30516C5.11976 5.49057 5.01459 5.74138 5.01232 6.00358C5.01004 6.26578 5.11083 6.51838 5.29299 6.70698L10.586 12L5.29299 17.293C5.19748 17.3852 5.1213 17.4956 5.06889 17.6176C5.01648 17.7396 4.98889 17.8708 4.98774 18.0036C4.98659 18.1364 5.01189 18.268 5.06217 18.3909C5.11245 18.5138 5.1867 18.6255 5.28059 18.7194C5.37449 18.8133 5.48614 18.8875 5.60904 18.9378C5.73193 18.9881 5.86361 19.0134 5.99639 19.0122C6.12917 19.0111 6.26039 18.9835 6.38239 18.9311C6.5044 18.8787 6.61474 18.8025 6.70699 18.707L12 13.414L17.293 18.707C17.4816 18.8891 17.7342 18.9899 17.9964 18.9877C18.2586 18.9854 18.5094 18.8802 18.6948 18.6948C18.8802 18.5094 18.9854 18.2586 18.9877 17.9964C18.9899 17.7342 18.8891 17.4816 18.707 17.293L13.414 12L18.707 6.70698C18.8891 6.51838 18.9899 6.26578 18.9877 6.00358C18.9854 5.74138 18.8802 5.49057 18.6948 5.30516C18.5094 5.11975 18.2586 5.01458 17.9964 5.01231C17.7342 5.01003 17.4816 5.11082 17.293 5.29298L12 10.586L6.70699 5.29298Z"
              fill="#1A0710"
              fillOpacity="0.85"
            />
          </svg>
        </div>

        <Formik
          initialValues={props.data}
          validationSchema={stepThreeValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="flex flex-col justify-center mb-4">
              <IoSearchOutline alt="" className="absolute mb-5 ml-2" />
              <Field
                className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline placeholder:pl-5"
                placeholder="Search for address"
                name="address"
              />
              <span>Your address is not visible to other users</span>
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex gap-1 justify-center">
              <button
                type="button"
                className="border px-[12px] h-[32px] w-[168px] rounded-xl text-[#5932EA] text-center text-[13px] font-[700] leading-[20px]"
              >
                Use current location
              </button>
              <button
                type="submit"
                className="border px-[12px] h-[32px] w-[168px] rounded-xl text-[#5932EA] text-center text-[13px] font-[700] leading-[20px]"
              >
                Add Manually
              </button>
            </div>

            <div className="flex flex-col justify-end">
              <h2 className="font-[700] text-[20px] leading-[28px] text-[#1A0710D9] mt-20 pb-3">
                Sharing your address shows:
              </h2>
              <div className="flex items-center gap-2 py-0.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 14V12.637C15 12.033 14.803 11.447 14.44 10.969C14.0817 10.4943 13.5748 10.1531 13 10M10.667 2.08701C11.2412 2.23327 11.7503 2.56665 12.1139 3.0345C12.4776 3.50234 12.6749 4.07798 12.6749 4.67051C12.6749 5.26304 12.4776 5.83868 12.1139 6.30653C11.7503 6.77437 11.2412 7.10775 10.667 7.25401M11 14V12.667C11.0035 11.9684 10.7419 11.2944 10.268 10.781C10.0427 10.5365 9.7694 10.341 9.46524 10.2067C9.16109 10.0723 8.83254 10.002 8.50003 10H3.50003C2.83703 10 2.20103 10.281 1.73203 10.781C1.25812 11.2944 0.99653 11.9684 1.00003 12.667V14H11ZM6.00003 7.33301C6.35455 7.33988 6.70687 7.27598 7.0364 7.14506C7.36593 7.01414 7.66604 6.81882 7.91918 6.57054C8.17232 6.32225 8.37342 6.02597 8.51069 5.69904C8.64797 5.37211 8.71868 5.02109 8.71868 4.66651C8.71868 4.31193 8.64797 3.96091 8.51069 3.63398C8.37342 3.30705 8.17232 3.01078 7.91918 2.76249C7.66604 2.5142 7.36593 2.31888 7.0364 2.18796C6.70687 2.05704 6.35455 1.99315 6.00003 2.00001C5.30178 2.01353 4.63668 2.30041 4.14765 2.799C3.65862 3.2976 3.38468 3.96812 3.38468 4.66651C3.38468 5.3649 3.65862 6.03543 4.14765 6.53402C4.63668 7.03261 5.30178 7.31949 6.00003 7.33301Z"
                    stroke="#1A0710"
                    strokeOpacity="0.65"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="font-[400] text-[15px] leading-[24px] text-[#1A0710D9]">
                  People near you
                </p>
              </div>
              <div className="flex items-center gap-2 py-0.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_132_31425)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.9504 0.890461C10.0094 0.510762 9.00232 0.321644 7.98765 0.334071C5.97065 0.358775 4.04465 1.17736 2.62707 2.61241C1.20949 4.04746 0.414551 5.98335 0.414551 8.0005C0.414551 10.0176 1.20949 11.9535 2.62707 13.3886C4.04465 14.8236 5.97065 15.6422 7.98765 15.6669C9.00232 15.6793 10.0094 15.4902 10.9504 15.1105C11.8914 14.7308 12.7477 14.1681 13.4696 13.455C14.1916 12.7419 14.7647 11.8925 15.1559 10.9562C15.5471 10.0199 15.7486 9.01524 15.7486 8.0005C15.7486 6.98575 15.5471 5.9811 15.1559 5.04479C14.7647 4.10848 14.1916 3.25914 13.4696 2.54601C12.7477 1.83289 11.8914 1.27016 10.9504 0.890461ZM8.01215 2.33392C8.76213 2.32474 9.50648 2.46452 10.202 2.74517C10.8976 3.02582 11.5305 3.44176 12.0641 3.96886C12.5977 4.49596 13.0214 5.12374 13.3105 5.81581C13.5997 6.50787 13.7486 7.25045 13.7486 8.0005C13.7486 8.75054 13.5997 9.49312 13.3105 10.1852C13.0214 10.8772 12.5977 11.505 12.0641 12.0321C11.5305 12.5592 10.8976 12.9752 10.202 13.2558C9.50648 13.5365 8.76213 13.6763 8.01215 13.6671C6.5213 13.6488 5.09771 13.0438 4.04991 11.9831C3.00212 10.9224 2.41455 9.49146 2.41455 8.0005C2.41455 6.50954 3.00212 5.07864 4.04991 4.01794C5.09771 2.95723 6.5213 2.35218 8.01215 2.33392ZM9 4C9 3.44772 8.55229 3 8 3C7.44772 3 7 3.44772 7 4V8C7 8.37883 7.21406 8.72513 7.55292 8.89449L10.2199 10.2275C10.7139 10.4744 11.3146 10.2741 11.5615 9.78008C11.8084 9.28606 11.6081 8.68542 11.1141 8.43851L9 7.38186V4Z"
                      fill="#1A0710"
                      fillOpacity="0.65"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_132_31425">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="font-[400] text-[15px] leading-[24px] text-[#1A0710D9] py-1">
                  Estimated delivery time
                </p>
              </div>
              <div className="flex items-center gap-2 py-0.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_139_31631)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 0.960002C9 0.429808 8.55228 0 8 0C7.44772 0 7 0.429808 7 0.960002V2.55997H6.33333C5.44928 2.55997 4.60143 2.89711 3.97631 3.49723C3.35119 4.09735 3 4.91128 3 5.75998C3 6.60867 3.35119 7.42261 3.97631 8.02272C4.60143 8.62284 5.44928 8.95998 6.33333 8.95998H7V11.52H4C3.44772 11.52 3 11.9498 3 12.48C3 13.0102 3.44772 13.44 4 13.44H7V15.04C7 15.5702 7.44772 16 8 16C8.55228 16 9 15.5702 9 15.04V13.44H9.66667C10.5507 13.44 11.3986 13.1029 12.0237 12.5027C12.6488 11.9026 13 11.0887 13 10.24C13 9.39129 12.6488 8.57736 12.0237 7.97724C11.3986 7.37712 10.5507 7.03998 9.66667 7.03998H9V4.47997H11.3333C11.8856 4.47997 12.3333 4.05016 12.3333 3.51997C12.3333 2.98978 11.8856 2.55997 11.3333 2.55997H9V0.960002ZM7 4.47997H6.33333C5.97971 4.47997 5.64057 4.61483 5.39052 4.85488C5.14048 5.09492 5 5.4205 5 5.75998C5 6.09945 5.14048 6.42503 5.39052 6.66507C5.64057 6.90512 5.97971 7.03998 6.33333 7.03998H7V4.47997ZM9 8.95998V11.52H9.66667C10.0203 11.52 10.3594 11.3851 10.6095 11.1451C10.8595 10.905 11 10.5795 11 10.24C11 9.90051 10.8595 9.57494 10.6095 9.33489C10.3594 9.09484 10.0203 8.95998 9.66667 8.95998H9Z"
                      fill="#1A0710"
                      fillOpacity="0.65"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_139_31631">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="font-[400] text-[15px] leading-[24px] text-[#1A0710D9]">
                  Estimated shopping costs
                </p>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const StepFour = (props) => {
  const { signup } = useAuth();

  async function handleSubmit(values, { setSubmitting }) {
    try {
      await signup(values.email, values.password, values.full_name);
      props.next(values);
      console.log(
        "data",
        userData,
        `user ${values.email} and ${values.password} registered as ${values.full_name}`
      );
    } catch (error) {
      console.log("error", error);
    }
    setSubmitting(false);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mx-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex justify-between">
          <div className="flex mb-4 gap-2">
            <h1>Add Address</h1>
            <h1 className="text-green-500 font-[700]">3 of 3</h1>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.70699 5.29298C6.51839 5.11082 6.26579 5.01003 6.00359 5.01231C5.74139 5.01458 5.49058 5.11975 5.30517 5.30516C5.11976 5.49057 5.01459 5.74138 5.01232 6.00358C5.01004 6.26578 5.11083 6.51838 5.29299 6.70698L10.586 12L5.29299 17.293C5.19748 17.3852 5.1213 17.4956 5.06889 17.6176C5.01648 17.7396 4.98889 17.8708 4.98774 18.0036C4.98659 18.1364 5.01189 18.268 5.06217 18.3909C5.11245 18.5138 5.1867 18.6255 5.28059 18.7194C5.37449 18.8133 5.48614 18.8875 5.60904 18.9378C5.73193 18.9881 5.86361 19.0134 5.99639 19.0122C6.12917 19.0111 6.26039 18.9835 6.38239 18.9311C6.5044 18.8787 6.61474 18.8025 6.70699 18.707L12 13.414L17.293 18.707C17.4816 18.8891 17.7342 18.9899 17.9964 18.9877C18.2586 18.9854 18.5094 18.8802 18.6948 18.6948C18.8802 18.5094 18.9854 18.2586 18.9877 17.9964C18.9899 17.7342 18.8891 17.4816 18.707 17.293L13.414 12L18.707 6.70698C18.8891 6.51838 18.9899 6.26578 18.9877 6.00358C18.9854 5.74138 18.8802 5.49057 18.6948 5.30516C18.5094 5.11975 18.2586 5.01458 17.9964 5.01231C17.7342 5.01003 17.4816 5.11082 17.293 5.29298L12 10.586L6.70699 5.29298Z"
              fill="#1A0710"
              fillOpacity="0.85"
            />
          </svg>
        </div>

        <Formik
          initialValues={props.data}
          validationSchema={stepFourValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <Field
                className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                placeholder="Street Address"
                name="street_address"
              />
              <ErrorMessage
                name="street_address"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="mb-4">
              <div className="relative">
                <Field
                  className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                  placeholder="Apartment"
                  name="apartment"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  Optional
                </span>
              </div>
            </div>

            <div className="mb-4">
              <Field
                className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                placeholder="City"
                name="city"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex justify-between mb-4">
              <Field
                className="border rounded w-[45%] h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                placeholder="State"
                name="state"
              />
              <ErrorMessage
                name="state"
                component="div"
                className="text-red-500 text-xs"
              />
              <Field
                className="border rounded w-[45%] h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                placeholder="Zip code"
                name="zip_code"
              />
              <ErrorMessage
                name="zip_code"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="flex flex-auto items-center justify-center">
              <button
                className="w-full h-[56px] bg-[#5932EA] hover:bg-[#9962EF] py-2 mt-4 px-4 rounded-xl focus:outline-none focus:shadow-outline tracking-[0.15px] text-white font-[700] text-[16px] leading-[24px]"
                type="submit"
              >
                Save Information
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const SignedUp = () => {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mx-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-sm">
        <div className="bg-[#EF498F24]">
          <img
            src={"/success.png"}
            alt=""
            height={"295px"}
            className="rounded w-full"
          />
        </div>
        <div className="p-6">
          <h1 className="text-center font-[700] text-[44px] leading-[48px] text-[#1A0710D9] py-4">
            You are successfully registered!
          </h1>
          <div className="flex flex-auto items-center justify-center">
            <button
              className="w-full bg-[#5932EA] hover:bg-[#9962EF] py-2 mt-4 px-4 rounded-xl focus:outline-none focus:shadow-outline tracking-[0.15px] text-white font-[700] text-[16px] leading-[24px]"
              type="button"
              onClick={submit}
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
