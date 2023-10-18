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
  token: string;
  isAuth: boolean;
  user: UserDto;
}
