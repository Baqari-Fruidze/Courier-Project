import * as yup from "yup";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const courierScema = yup.object({
  name: yup.string().required().min(3),
  lastName: yup.string().required().min(3),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^\d+$/, "Only numbers are allowed"),
  email: yup
    .string()
    .required()
    .matches(emailRegex, "Please enter a valid email address"),
  userName: yup.string().required().min(3),
  password: yup.string().required(),
  Rpassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required(),
});
