import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidationSchema } from "../utils/validations";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login(props) {
  const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  async function handleSubmit(values, { setSubmitting, setFieldError }) {
    setGeneralError("");

    try {
      await login(values.email, values.password);
      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setFieldError("email", "Invalid email or password");
        setFieldError("password", "Invalid email or password");
        setGeneralError("Invalid email or password");
      } else {
        setGeneralError("An unexpected error occurred. Please try again.");
      }
    }

    setSubmitting(false);
  }

  const initialValues = props.data || { email: "", password: "" };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mx-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex mb-4 justify-between">
          <ul className="flex">
            <li className="-mb-px mr-1">
              <Link
                to="/"
                className="bg-white text-gray-500 inline-block py-2 px-4 hover:text-blue-800 font-semibold"
              >
                Register
              </Link>
            </li>
            <li className="mr-1">
              <p
                className="bg-white inline-block border-[#EF498F] border-b py-2 px-4 text-[#1A0710D9] font-[400px] leading-[24px]"
                href="#"
              >
                Log in
              </p>
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

        <div className="mb-4 text-gray-500">or Login with email</div>

        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          validateOnChange={true}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <Field
                  className="border rounded w-full h-[56px] py-2 px-3 text-gray-700 font-[400] text-[16px] leading-[24px] focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="example@mail.com"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
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
                    className="text-red-500"
                  />
                </div>
              </div>

              {generalError && (
                <div className="text-red-500 mb-4">{generalError}</div>
              )}

              <div className="flex flex-auto items-center justify-center">
                <button
                  className="w-full h-[56px] bg-[#5932EA] hover:bg-[#9962EF] py-2 mt-4 px-4 rounded-xl focus:outline-none focus:shadow-outline tracking-[0.15px] text-white font-[700] text-[16px] leading-[24px]"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login to dashboard"}
                </button>
              </div>
              <div className="mt-4">
                <Field type="checkbox" className="form-checkbox" name="check" />
                <span className="ml-2 text-gray-700">Remember Me</span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
