export interface User {
  fullName: string;
  gender: string;
  phoneNumber: string;
  birthDate: string;
  addressId: string;
  email: string;
  password: string;
}

export interface UserDto extends User {
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
