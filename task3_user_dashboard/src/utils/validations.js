import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(8, "8+ characters").required("Input password"),
});

export const stepOneValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Add an email address"),
  password: yup
    .string()
    .min(8, "8+ characters")
    .required("Password is required"),
});

export const stepTwoValidationSchema = yup.object().shape({
  full_name: yup.string().required("Enter your full name"),
  gender: yup
    .string()
    .oneOf(["male", "female"], "Invalid gender")
    .required("Select Gender"),
  country_code: yup
    .number()
    .max(999, "country code max. three digits")
    .typeError("country code must be a number")
    .required("Required"),
  phone: yup.number().typeError("must be a number").required("Phone Required"),
  birthday: yup.date(),
});

export const stepThreeValidationSchema = yup.object().shape({
  address: yup.string(),
});

export const stepFourValidationSchema = yup.object().shape({
  street_address: yup.string().required("Add street address"),
  apartment: yup.string(),
  city: yup.string().required("Add your city"),
  state: yup.string().required("Add your state"),
  zip_code: yup.number().required("Zip code required"),
});
