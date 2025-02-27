import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: rgb(255, 255, 255);
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  H1 {
    font-size: 44px;
    font-weight: bold;  
    margin-left: 20px;
    color: #ff6b00;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  margin: 0 15px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &.active {
    color: gray;
  }

  &:hover {
    color: gray;
  }
`;

function Header() {
  return (
    <StyledContainer>
      <h1>Blogs City</h1>
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">À propos</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </nav>
    </StyledContainer>
  );
}

export default Header;
