import styled, { css } from 'styled-components';

import colors from 'styles/colors';

const getButtonSize = (size: ButtonSize) => {
  const sizeMap = {
    small: '5px 20px',
    medium: '10px 40px',
    large: '15px 60px',
    full: '15px 40px',
  };

  return sizeMap[size];
};

export const ButtonContainer = styled.button<Required<IButtonProps>>`
  border: 0;
  background-color: ${colors.blue.dark};
  padding: ${({ size }) => getButtonSize(size)};
  border-radius: ${({ borderType }) => (borderType === 'pill' ? '15px' : '5px')};
  font-size: 1rem;
  transition: 0.2s ease all;
  color: ${colors.white.normal};
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  width: ${({ size }) => (size === 'full' ? '100%' : '')};
  cursor: pointer;

  :hover {
    transition: 0.2s ease all;
    background-color: ${colors.blue.light};
  }

  ${({ primary, borderType }) =>
    !primary &&
    css`
      background-color: ${borderType === 'pill' ? colors.white.lighter : colors.blue.sad};
      color: ${borderType === 'pill' ? colors.black.soft : colors.white.normal};
      border: 1px solid ${borderType === 'pill' ? colors.black.soft : colors.white.normal};

      :hover {
        background-color: ${borderType === 'pill' ? colors.white.solf : colors.blue.sadLight};
      }
    `}
`;
