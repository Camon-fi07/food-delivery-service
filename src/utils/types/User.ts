export interface UserInfo {
  fullName: string;
  gender: string;
  phoneNumber: string;
  birthDate: string;
  addressId: string;
  email: string;
  password: string;
}

export interface User extends UserInfo {
  token: string;
}
