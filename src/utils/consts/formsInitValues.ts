import { Gender } from "utils/types/Gender";
import { loginValidateScheme, profileValidateScheme, registrationValidateScheme } from "./validation";
import { Authorization, UserDto, UserRegisterModel, UserEditModel } from "utils/types/User";
import { FormInfo } from "utils/types/FormInfo";
import { PurchaseDto } from "utils/types/CartInfo";

export const registrationInitValues = (onSubmit: (value: UserRegisterModel) => void): FormInfo<UserRegisterModel> => {
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
        label: "Дата рождения",
        name: "birthDate",
        type: "date",
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
        label: "Адрес проживания",
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

export const profileInitValues = (user: UserDto, onSubmit: (value: UserEditModel) => void): FormInfo<UserEditModel> => {
  return {
    values: [
      {
        label: "ФИО",
        name: "fullName",
        type: "text",
        defaultValue: user.fullName,
      },
      {
        label: "Пол",
        name: "gender",
        type: "select",
        options: [
          { value: Gender.Male, name: "Мужской" },
          { value: Gender.Female, name: "Женский" },
        ],
        defaultName: "Мужской",
        defaultValue: user.gender,
      },
      {
        label: "Телефон",
        name: "phoneNumber",
        type: "tel",
        defaultValue: user.phoneNumber,
      },
      {
        label: "Дата рождения",
        name: "birthDate",
        type: "date",
        defaultValue: user.birthDate.substring(0, 10),
      },
      {
        label: "Email",
        name: "email",
        type: "text",
        defaultValue: user.email,
      },
      {
        label: "Адрес проживания",
        name: "addressId",
        type: "address",
        defaultValue: user.address,
      },
    ],
    onSubmit: onSubmit,
    vaidation: profileValidateScheme,
    actionName: "Изменить",
  };
};

export const purchaseInitValues = (user: UserDto): PurchaseDto => ({
  addressId: user.address,
  deliveryTime: "",
  email: user.email,
  phone: user.phoneNumber,
});
