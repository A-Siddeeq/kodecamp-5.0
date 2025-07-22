import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(8, "8+ characters").required("Input password"),
});

export const signupValidationSchema = yup.object().shape({
  Name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Add an email address"),
  password: yup
    .string()
    .min(8, "8+ characters")
    .required("Password is required"),
});
