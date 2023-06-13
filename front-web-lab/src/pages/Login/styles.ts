import styled from 'styled-components';

import labsImage from 'assets/images/lab-blue.png';
import colors from 'styles/colors';
import { Container } from 'components/TextInput/styles';
import { ButtonContainer } from 'components/Button/styles';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.white.lighter};
  height: 100%;
  overflow: auto;
`;

export const HeaderLoginContainer = styled.div`
  background-image: url(${labsImage});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${colors.white.normal};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding-top: 60px;
`;

export const HeaderImage = styled.img`
  margin-bottom: 36px;
`;

export const HeaderSubtitle = styled.span`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 1.25rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 100px;
`;

export const HeaderCurve = styled.div`
  display: block;
  box-sizing: border-box;
  height: 100px;
  width: 100%;
  background-color: #f5f5f5;
  clip-path: ellipse(56.2% 180% at 50% 180%);
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  width: 70%;

  ${Container} {
    margin-bottom: 20px;
    width: 100%;
  }

  ${ButtonContainer} {
    margin-top: 80px;
    width: 100%;
    font-size: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      margin-right: 10px;
    }
  }
`;

export const LoginSeparation = styled.div`
  position: relative;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  margin: 55px 0;

  ::before {
    content: '';
    position: absolute;
    top: 14px;
    left: 100px;
    width: 25%;
    border-bottom: 4px solid #1d2129;
  }

  ::after {
    content: '';
    position: absolute;
    top: 14px;
    right: 100px;
    width: 25%;
    border-bottom: 4px solid ${colors.black.soft};
  }
`;

export const LoginBio = styled.div`
  display: flex;
  width: 100%;

  ${ButtonContainer} {
    margin-top: 0;
    :first-child {
      margin-right: 30px;
    }
  }
`;

export const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: colors.white.lighter,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const modalAccessStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: colors.white.lighter,
  boxShadow: 24,
  p: 1,
};
