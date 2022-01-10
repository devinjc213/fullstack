import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavIcon from "./NavIcon";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 3rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <NavIcon />
      <Link to="/">Home</Link>
      <Link to="/newclimb">Record New Climb</Link>
    </HeaderContainer>
  );
}

export default Header;
