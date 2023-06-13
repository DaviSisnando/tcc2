import styled from 'styled-components';

import colors from 'styles/colors';
import { getColorAlpha } from 'utils/colors';

const getFontSize = (size: FontSizeType) => {
  const fontSizeMap = {
    small: '0.875rem',
    normal: '1.1rem',
    large: '1.5rem',
  };

  return fontSizeMap[size];
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelTitle = styled.span`
  color: ${colors.black.soft};
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 1.125rem;
`;

export const TextInputContainer = styled.div`
  border: 0;
  width: 100%;
  height: 44px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  background-color: ${colors.white.normal};
  border: 1px solid ${getColorAlpha(colors.black.soft, 0.25)};
  box-shadow: 0 4px 4px ${getColorAlpha(colors.black.soft, 0.25)};
`;

export const TextInputStyled = styled.input<Required<Pick<ITextInputProps, 'fontSize'>>>`
  width: 100%;
  height: 100%;
  border: 0;
  font-size: ${({ fontSize }) => getFontSize(fontSize)};
  color: ${colors.black.soft};
  font-weight: 500;
  border-radius: 8px;

  ::placeholder {
    color: ${colors.grey.normal};
  }

  & + svg {
    color: ${colors.blue.dark};
    cursor: pointer;
    padding: 2px;
  }
`;
