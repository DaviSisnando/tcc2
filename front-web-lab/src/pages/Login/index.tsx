import { BsPersonBoundingBox } from 'react-icons/bs';
import { Modal, Box } from '@mui/material';
import { useRef, useState } from 'react';
import Webcam from 'react-webcam';

import {
  HeaderImage,
  HeaderLoginContainer,
  HeaderSubtitle,
  HeaderTitle,
  LoginContainer,
  HeaderCurve,
  LoginForm,
  LoginSeparation,
  LoginBio,
  modalStyle,
  modalAccessStyle,
} from 'pages/Login/styles';
import uniforLogo from 'assets/images/uniforlogo.svg';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import api from 'services/api';
import Access from 'components/Access';
import { dataURIToBlob } from 'utils/image';
import { useInterval } from 'utils/useInterval';

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingRequest, setIsLoadingRequest] = useState(false);
  const [isModalAccessOpen, setIsModalAccessOpen] = useState(false);
  const [accessType, setAccessType] = useState<AccessTypes>('locked');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const videoRef = useRef<Webcam>(null);

  const openModalTemp = () => {
    setIsModalAccessOpen(true);

    setTimeout(() => {
      setIsModalAccessOpen(false);
    }, 3000);
  };

  const handleLogin = async () => {
    try {
      const loginData = await api.post(`${import.meta.env.VITE_USER_SERVICE_BASE_URL}/sessions`, {
        email,
        password,
      });
      
      if (loginData.status === 200) {
        setAccessType('unlocked');
      } else {
        setAccessType('locked');
      }
    } catch (error) {
      setAccessType('locked');
    }

    openModalTemp();
  };

  const handleCloseFaceId = () => {
    setIsOpen(false);
  };

  const handleFaceIdButton = () => {
    setIsOpen(true);
  };

  useInterval(
    async () => {
      if (isLoadingRequest) return;
      const imageBase64 = videoRef.current?.getScreenshot();

      const file = dataURIToBlob(imageBase64 ?? '');
      const formdata = new FormData();
      formdata.append('File', file);
      setIsLoadingRequest(true);
      const checkReq = await api.post('/face/check', formdata);
      const {
        result: { label, pass },
      } = checkReq.data;

      if (pass && label && label !== 'unknown') {
        setAccessType('unlocked');
        openModalTemp();
        handleCloseFaceId();
      }

      setIsLoadingRequest(false);
    },
    !isOpen ? null : 2000,
  );

  return (
    <LoginContainer>
      <Modal open={isOpen} onClose={handleCloseFaceId}>
        <Box sx={modalStyle}>
          <Webcam width="100%" height={600} ref={videoRef} />
        </Box>
      </Modal>
      <Modal open={isModalAccessOpen}>
        <Box sx={modalAccessStyle}>
          <Access type={accessType} />
        </Box>
      </Modal>
      <HeaderLoginContainer>
        <HeaderImage src={uniforLogo} alt="Unifor logo" />
        <HeaderSubtitle>Acesso aos Laboratórios</HeaderSubtitle>
        <HeaderTitle>Área de Login</HeaderTitle>
        <HeaderCurve />
      </HeaderLoginContainer>

      <LoginForm onSubmit={event => event.preventDefault()}>
        <TextInput placeholder="Matrícula" onChange={e => setEmail(e.target.value)} />
        <TextInput placeholder="Senha" isPassword onChange={e => setPassword(e.target.value)} />
        <Button onClick={handleLogin} size="full">
          Entrar
        </Button>

        <LoginSeparation>ou</LoginSeparation>

        <LoginBio>
          <Button onClick={handleFaceIdButton} size="full">
            <BsPersonBoundingBox size={30} />
            Face ID
          </Button>
        </LoginBio>
      </LoginForm>
    </LoginContainer>
  );
}

export default Main;
