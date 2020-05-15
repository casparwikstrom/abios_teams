import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";

const NavbarStyle = styled.div`
  .navbar {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    background: #262730;
    border-bottom: 1px solid #21222b;
    height: 80px;
    /* color: white; */
    justify-content: space-evenly;
    align-items: center;
    z-index: 5;
    color: rgb(249, 249, 249);
    font-family: "Nunito Sans", sans-serif;
    a {
      color: rgb(249, 249, 249);
      text-decoration: none;
    }
    img {
      height: 40px;
    }
    .link {
      width: 67%;
      float: left;
      display: flex;
      font-weight: 600 !important;
    }
  }
`;

function NavBar() {
  return (
    <NavbarStyle>
      <Container>
        <div className="navbar">
          <div className="logo">
            <img
              src="https://img.abiosgaming.com/other/Abios-Logo-with-white-text.png"
              alt=""
            />
          </div>
          <div className="link">
            <a href="/">Standings</a>
          </div>
        </div>
      </Container>
    </NavbarStyle>
  );
}

export default NavBar;
