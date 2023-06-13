interface IUser {
  _id: string;
  name: string;
  dateOfBirth: string;
  role: string;
  status: string;
  registration: string;
  bankAccount: string;
  maritalStatus: string;
  address: string;
  phone: string;
  email: string;
  filename: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  image_url: string;
  id: string;
}

interface IRequestUser {
  data: IUser[];
}
