import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  max-height: 5rem;
`;

const grow = keyframes`
  from {
    transform: scale(0);
  } to {
    transform: scale(1);
  }
`;

const shrink = keyframes`
  from {
    transform: scale(1);
  } to {
    transform: scale(0);
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  margin: 3rem;
  background-color: #947e73;
  opacity: 60%;
  border-radius: 5px;
  box-shadow: 5px 5px 5px;
  position: relative;
  animation: ${grow} 0.25s;
`;

const ListContainerShrink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  margin: 3rem;
  background-color: #947e73;
  opacity: 60%;
  border-radius: 5px;
  box-shadow: 5px 5px 5px;
  position: relative;
  animation: ${shrink} 0.25s 1 linear forwards;
`;

const HeaderList = styled.div`
  width: inherit;

  :not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 3rem;
`;

const NavIcon = styled.div`
  background-color: #ee8687;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 3px 3px 5px;
`;

function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const mountain = <FontAwesomeIcon icon={faMountain} />;

  return (
    <>
      <HeaderContainer>
        <IconContainer>
          <NavIcon>
            <img
              src={require("../assets/imgs/nav-icon.png")}
              height="40"
              width="40"
              onClick={() => setShowHeader(!showHeader)}
            />
          </NavIcon>
        </IconContainer>

        {showHeader ? (
          <ListContainer>
            <HeaderList>
              {mountain}
              <Link to="/">Home</Link>
            </HeaderList>
            <HeaderList>
              {mountain}
              <Link to="/newclimb">Record New Climb</Link>
            </HeaderList>
          </ListContainer>
        ) : (
          <ListContainerShrink>
            <HeaderList>
              {mountain}
              <Link to="/">Home</Link>
            </HeaderList>
            <HeaderList>
              {mountain}
              <Link to="/newclimb">Record New Climb</Link>
            </HeaderList>
          </ListContainerShrink>
        )}
      </HeaderContainer>
    </>
  );
}

export default Header;
