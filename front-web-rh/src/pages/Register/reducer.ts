export const userFormReducer = (state: IUserRegister, action: IUserRegisterAction) => {
  switch (action.type) {
    case 'file':
    case 'name':
    case 'email':
    case 'role':
    case 'registration':
    case 'bankAccount':
    case 'maritalStatus':
    case 'address':
    case 'phone':
      return { ...state, [action.type]: action.payload };
    case 'dateOfBirth':
      return { ...state, [action.type]: (action.payload as string) };
    default:
      return state;
  }
};

export const userFormInitialState: IUserRegister = {
  file: '',
  name: '',
  dateOfBirth: '',
  role: '',
  registration: '',
  bankAccount: '',
  maritalStatus: '',
  address: '',
  phone: '',
  email: '',
  password: '12345',
  status: 'Ativo',
};
