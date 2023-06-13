import styled from 'styled-components';
import { StylesConfig } from 'react-select';

import { ButtonContainer } from 'components/Button/styles';
import colors from 'styles/colors';

export const DropdownContainer = styled.div`
  display: flex;
  border-radius: 12px;
  flex-direction: column;

  ${ButtonContainer} {
    box-shadow: none;
    margin-left: 40px;
  }
`;

export const LabelTitle = styled.span`
  color: ${colors.black.soft};
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 1.125rem;
`;

export const customStyleIcon = {
  marginRight: '8px',
};

export const customStyleSelect: StylesConfig = {
  menu: provided => ({
    ...provided,
  }),
  container: provided => ({
    ...provided,
    flex: 1,
  }),
  control: provided => ({
    ...provided,
    border: `2px solid ${colors.black.normal}`,
    background: colors.white.lighter,
    borderRadius: '5px',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    width: 0,
  }),
};
