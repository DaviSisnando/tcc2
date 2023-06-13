import { Nav, LogoImg, NavItemsContainer } from 'components/Header/styles';

function Header({ icon, iconAlt, iconClick, children }: IHeaderProps) {
  return (
    <Nav data-testid="test-navigation">
      <LogoImg src={icon} alt={iconAlt} onClick={iconClick} />
      <NavItemsContainer data-testid="test-navigation-items">{children}</NavItemsContainer>
    </Nav>
  );
}

export default Header;
