import styled from 'styled-components';

import { HeaderItemContainer } from 'components/HeaderItem/styles';
import colors from 'styles/colors';
import zIndexPriority from 'styles/zIndexPriority';

export const Nav = styled.header`
  width: 100%;
  height: 80px;
  z-index: ${zIndexPriority.VERY_HIGH};
  background-color: ${colors.blue.sad};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const LogoImg = styled.img`
  height: 65%;
  cursor: pointer;
`;

export const NavItemsContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  ${HeaderItemContainer} {
    padding: 0 16px;
  }
`;
