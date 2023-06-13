import { GoGraph } from 'react-icons/go';
import { FaSuitcase } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useReducer } from 'react';

import {
  RegisterContainer,
  RegisterContent,
  RegisterRow,
  RegisterRowButton,
  RegisterTitle,
} from 'pages/Register/styles';
import Header from 'components/Header';
import LogoUniforAll from 'assets/images/LogoUniforAll.png';
import HeaderItem from 'components/HeaderItem';
import TextInput from 'components/TextInput';
import Dropdown from 'components/Dropdown';
import { Mask } from 'utils/mask';
import FileInput from 'components/FileInput';
import Button from 'components/Button';
import { MARITALSTATUS } from 'pages/Register/constants';
import { ROLE } from 'pages/ListEmployee/constants';
import { userFormInitialState, userFormReducer } from 'pages/Register/reducer';
import api from 'services/api';
import faceApi from 'services/faceApi';

function Register() {
  const navigate = useNavigate();
  const [userForm, dispatchUserForm] = useReducer(userFormReducer, userFormInitialState);
  
  const goToLandingPage = () => {
    navigate('/');
  };

  const handleChangeInput = (type: UserRegisterTypes) => (event: ChangeEvent<HTMLInputElement>) =>
    dispatchUserForm({ payload: event.target.value, type });

  const handleChangeFile = (type: UserRegisterTypes) => (event: ChangeEvent<HTMLInputElement>) =>
    dispatchUserForm({ payload: event.target?.files?.[0] ?? '', type });

  const handleChangeDropdown = (type: UserRegisterTypes) => (newValue: unknown) =>
    dispatchUserForm({
      payload: (newValue as { label: string; value: string })?.value ?? '',
      type,
    });

  const handleCreateUser = async () => {
    const faceApiObj = {
      File1: userForm?.file,
      File2: userForm?.file,
      File3: userForm?.file,
      label: userForm?.name
    }
    const aa = await faceApi.postForm('/face', faceApiObj);
    const data = await api.postForm('/users', userForm);
    if (data.status === 201) {
      navigate('/');
    }
  };

  return (
    <RegisterContainer>
      <Header icon={LogoUniforAll} iconAlt="Unifor logo" iconClick={goToLandingPage}>
        <HeaderItem as="link">
          <GoGraph /> Dashboard
        </HeaderItem>
        <HeaderItem as="link" href='/'>
          <FaSuitcase />
          Colaboradores
        </HeaderItem>
        <HeaderItem as="button" primary={false} borderType="normal">
          <MdOutlineLogout /> SAIR
        </HeaderItem>
      </Header>

      <RegisterContent>
        <RegisterTitle>Cadastro de colaborador</RegisterTitle>

        <RegisterRow>
          <TextInput
            fontSize="small"
            label="Nome"
            placeholder="Nome completo"
            onChange={handleChangeInput('name')}
            value={userForm.name}
          />
          <TextInput
            fontSize="small"
            label="Número da conta bancária"
            placeholder="Número da conta com o dígito"
            onChange={handleChangeInput('bankAccount')}
            value={userForm.bankAccount}
          />
        </RegisterRow>

        <RegisterRow>
          <TextInput
            fontSize="small"
            label="Matrícula"
            placeholder="Matrícula"
            onChange={handleChangeInput('registration')}
            value={userForm.registration}
          />
          <Dropdown
            label="Cargo"
            placeholder="Cargo"
            options={ROLE}
            onSelect={handleChangeDropdown('role')}
          />
        </RegisterRow>

        <RegisterRow>
          <TextInput
            fontSize="small"
            label="Endereço"
            placeholder="Lougradouro, número e apartamento ou casa"
            onChange={handleChangeInput('address')}
            value={userForm.address}
          />
          <FileInput label="Insira uma foto do colaborador" onChange={handleChangeFile('file')} />
        </RegisterRow>

        <RegisterRow>
          <TextInput
            fontSize="small"
            label="E-mail"
            placeholder="ex: email@email.com"
            onChange={handleChangeInput('email')}
            value={userForm.email}
          />
          <Dropdown
            label="Estado civil"
            placeholder="Estado civil"
            options={MARITALSTATUS}
            onSelect={handleChangeDropdown('maritalStatus')}
          />
        </RegisterRow>

        <RegisterRow>
          <TextInput
            fontSize="small"
            label="Telefone"
            placeholder="ex: (DDD) 99000-0000"
            onChange={handleChangeInput('phone')}
            value={userForm.phone}
          />
          <TextInput
            mask={Mask.Date}
            label="Data de nascimento"
            placeholder="dd/mm/aaaa"
            onChange={handleChangeInput('dateOfBirth')}
            value={userForm.dateOfBirth}
          />
        </RegisterRow>

        <RegisterRowButton>
          <Button borderType="normal" size="large" primary={false} onClick={goToLandingPage}>
            Cancelar
          </Button>
          <Button borderType="normal" size="large" onClick={handleCreateUser}>
            Cadastrar colaborador
          </Button>
        </RegisterRowButton>
      </RegisterContent>
    </RegisterContainer>
  );
}

export default Register;
