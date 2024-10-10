import * as yup from "yup";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const companyScema = yup.object({
  companyName: yup.string().required().min(3),
  email: yup
    .string()
    .matches(emailRegex, "Please enter a valid email address")
    .required(),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^\d+$/, "Only numbers are allowed"),
  city: yup.string().required(),
  street: yup.string().required(),
  houseNumber: yup
    .string()
    .required()
    .matches(/^\d+$/, "Only numbers are allowed"),
  userName: yup.string().required().min(3),
  password: yup.string().required(),
  Rpassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required(),
});
