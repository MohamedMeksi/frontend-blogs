import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: #f7f7f7;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #ff6b00;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Button = styled(Link)`
  background: linear-gradient(135deg, #ff6b00, #ff9000);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  margin: 0 10px;
  display: inline-block;
  transition: all 0.3s ease;
  display:centre;

  &:hover {
    background: linear-gradient(135deg, #ff9000, #ff6b00);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  &.active {
    background: gray;
  }
`;

const HomeLink = styled(Link)`
  color: #ff6b00;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: gray;
  }

  &.active {
    color: gray;
  }
`;

function Header() {
  return (
    <StyledContainer>
      <Title>Blogs City</Title>
      <nav>
        <HomeLink to="/" activeClassName="active">Home</HomeLink>
        <HomeLink to="/create" activeClassName="active">Craete</HomeLink>
        <Button to="/login" activeClassName="active">Login</Button>
        <Button to="/signup" activeClassName="active">Sign Up</Button>
      </nav>
    </StyledContainer>
  );
}

export default Header;
