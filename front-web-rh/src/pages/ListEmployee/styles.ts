import styled from 'styled-components';

import { SearchInputContainer } from 'components/SearchInput/styles';
import colors from 'styles/colors';
import { ButtonContainer } from 'components/Button/styles';

export const ListEmployeeContainer = styled.div`
  height: 100%;
  background-color: ${colors.white.lighter};
`;

export const ListEmployeeContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 150px 0 150px;
`;

export const ListEmployeeTitle = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 48px;
`;

export const ListEmployeeFlexTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;

  ${ButtonContainer} {
    svg {
      margin-right: 1rem;
    }
  }
`;

export const ListEmployeeFlexSearch = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  ${SearchInputContainer} {
    flex: 0.5;
  }

  > * {
    margin-right: 20px;
  }
`;

export const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: colors.white.lighter,
  boxShadow: 24,
  p: 1,
};

export const ModalTypeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ModalTypeButtons = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ModalTypeRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 36px 0 12px 0;
  width: 100%;

  > * {
    background-color: transparent;

    flex: 0.5;

    margin: 0 2%;
  }
`;
