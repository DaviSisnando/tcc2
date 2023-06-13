type UserRegisterTypes =
  | 'file'
  | 'name'
  | 'dateOfBirth'
  | 'role'
  | 'registration'
  | 'bankAccount'
  | 'maritalStatus'
  | 'address'
  | 'phone'
  | 'email';

interface IUserRegisterAction {
  type: UserRegisterTypes;
  payload: string | File;
}

interface IUserRegister {
  file: File | string;
  name: string;
  dateOfBirth: string;
  role: string;
  registration: string;
  bankAccount: string;
  maritalStatus: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  status: string;
}
