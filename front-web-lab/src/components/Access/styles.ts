import styled from 'styled-components';

import colors from 'styles/colors';

export const AccessContainer = styled.div`
  height: 100%;
  background-color: ${colors.white.lighter};
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const AccessTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.blue.dark};
  margin-bottom: 115px;
`;

export const AccessMessage = styled.span`
  margin-top: 135px;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${colors.blue.dark};
`;
