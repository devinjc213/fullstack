import React from "react";
import styled from "styled-components";

const IconStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1rem;
  height: 1rem;
`;

function NavIcon() {
  return (
    <IconStyle>
      <a href="">
        <img
          src={require("../assets/imgs/nav-icon.png")}
          height="50"
          width="50"
        />
      </a>
    </IconStyle>
  );
}

export default NavIcon;
