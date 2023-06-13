import styled from 'styled-components';

import colors from 'styles/colors';

export const RegisterContainer = styled.div`
  height: 100%;
  background-color: ${colors.white.lighter};
`;

export const RegisterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 150px 0 150px;
`;

export const RegisterTitle = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 48px;
  margin-bottom: 60px;
`;

export const RegisterRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;

  > * {
    background-color: transparent;

    flex: 0.5;

    :first-child {
      margin-right: 10%;
    }
  }
`;

export const RegisterRowButton = styled.div`
  margin-top: 80px;

  > * {
    margin-right: 20px;
  }
`;
