import styled from 'styled-components';

import colors from 'styles/colors';

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background-color: ${colors.white.lighterest};
  border-radius: 10px;
`;

export const SearchInputStyled = styled.input`
  margin-left: 10px;
  border: 0;
  background-color: transparent;
  font-size: 1rem;
  width: 100%;
  height: 100%;
  font-weight: 500;
`;
