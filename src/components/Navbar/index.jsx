import {
  LeftContainer,
  NavbarContainer,
  NavbarLink,
  NavbarLinkRight,
  RightContainer,
  Span,
} from "./style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LeftContainer>
        <NavbarLink to="/">
          Soft<Span>Pets</Span>
        </NavbarLink>
      </LeftContainer>
      <RightContainer>
        <NavbarLinkRight to="/">Home</NavbarLinkRight>
        <NavbarLinkRight to="/pets">Pets</NavbarLinkRight>
      </RightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
