import { Gender } from "utils/types/Gender";
import { loginValidateScheme, registrationValidateScheme } from "./validation";
import { Authorization, User } from "utils/types/User";
import { FormInfo } from "utils/types/FormInfo";

export const registrationInitValues = (onSubmit: (value: User) => void): FormInfo<User> => {
  return {
    values: [
      {
        label: "ФИО",
        name: "fullName",
        type: "text",
      },
      {
        label: "Пол",
        name: "gender",
        type: "select",
        options: [
          { value: Gender.Male, name: "Мужской" },
          { value: Gender.Female, name: "Женский" },
        ],
      },
      {
        label: "Телефон",
        name: "phoneNumber",
        type: "tel",
      },
      {
        label: "Email",
        name: "email",
        type: "text",
      },
      {
        label: "Пароль",
        name: "password",
        type: "password",
      },
      {
        label: "Адрес",
        name: "addressId",
        type: "address",
      },
    ],
    onSubmit: onSubmit,
    vaidation: registrationValidateScheme,
    actionName: "Регистрация",
  };
};

export const loginInitValues = (onSubmit: (value: Authorization) => void): FormInfo<Authorization> => {
  return {
    values: [
      {
        label: "Email",
        name: "email",
        type: "text",
      },
      {
        label: "Пароль",
        name: "password",
        type: "password",
      },
    ],
    onSubmit: onSubmit,
    vaidation: loginValidateScheme,
    actionName: "Авторизация",
  };
};
