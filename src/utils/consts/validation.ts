import * as yup from "yup";
import { email, password, required } from "./errorsText";
import { nameReg, passwordReg, phoneReg } from "./regex";

export const registrationValidateScheme = yup.object().shape({
  fullName: yup.string().required(required).matches(nameReg, "Неправильное имя"),
  password: yup.string().required(required).min(6, "Минимум 6 символов").matches(passwordReg, password),
  email: yup.string().required(required).email(email),
  addressId: yup.string().required(required),
  birthDate: yup.string().required(required),
  gender: yup.string().required(required),
  phoneNumber: yup.string().required(required).matches(phoneReg, "Неправильный формат телефона"),
});

export const loginValidateScheme = yup.object().shape({
  password: yup.string().required(required).min(6, "Минимум 6 символов").matches(passwordReg, password),
  email: yup.string().required(required).email(email),
});

export const profileValidateScheme = yup.object().shape({
  fullName: yup.string().required(required).matches(nameReg, "Неправильное имя"),
  addressId: yup.string().required(required),
  birthDate: yup.string().required(required),
  gender: yup.string().required(required),
  phoneNumber: yup.string().required(required).matches(phoneReg, "Неправильный формат телефона"),
});
