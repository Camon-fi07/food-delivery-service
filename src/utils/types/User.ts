export interface UserRegisterModel {
  fullName: string;
  gender: string;
  phoneNumber: string;
  birthDate: string;
  addressId: string;
  email: string;
  password: string;
}

export interface UserDto {
  fullName: string;
  gender: string;
  phoneNumber: string;
  birthDate: string;
  address: string;
  email: string;
  id: string;
}

export interface UserState {
  data: {
    token: string;
    user: UserDto;
  };
  isLoading: boolean;
  isAuth: boolean;
  error: string;
}

export interface Authorization {
  email: string;
  password: string;
}

export interface UserEditModel {
  fullName: string;
  gender: string;
  phoneNumber: string;
  birthDate: string;
  addressId: string;
}
