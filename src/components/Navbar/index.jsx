import {
  LeftContainer,
  NavbarContainer,
  NavbarLink,
  NavbarLinkRight,
  RightContainer,
} from "./style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LeftContainer>
        <NavbarLink to="/">SoftPets</NavbarLink>
      </LeftContainer>
      <RightContainer>
        <NavbarLinkRight to="/">Home</NavbarLinkRight>
        <NavbarLinkRight to="/pets">Pets</NavbarLinkRight>
      </RightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
