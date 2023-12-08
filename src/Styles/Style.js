import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleContainer = styled.header`
  width: 100%;
  height: 100%;
  background-color: #001f3f; /* Azul escuro */
  padding: 10px;
  text-align: center;
  border-bottom: 4px solid #ffcc29; /* Amarelo brilhante para destacar */
`;

const StyleTitle = styled.h1`
  font-family: "Press Start 2P", cursive;
  font-size: 24px;
  margin: 0;
  color: #ffffff; /* Branco para destacar */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const StyleNav = styled.nav`
  margin-top: 10px;
`;

const StyleLink = styled(Link)`
  display: inline-block;
  margin: 0 10px;
  padding: 5px;
  font-family: "Press Start 2P", cursive;
  font-size: 14px;
  color: #ffcc29; /* Amarelo brilhante para destacar */
  text-decoration: none;
  border: 2px solid #ffcc29; /* Amarelo brilhante para destacar */
  background-color: #001f3f; /* Azul escuro */
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(255, 204, 41, 0.5); /* Sombra amarela para destacar */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #003366; /* Azul mais escuro para simular movimento */
    box-shadow: 2px 2px 8px rgba(255, 204, 41, 0.8); /* Sombra mais intensa no hover */
  }
`;

const StyleHeader = () => {
  return (
    <StyleContainer>
      <StyleNav>
        <StyleLink to="/">Inicio</StyleLink>
        <StyleLink to="/sobre">Sobre</StyleLink>
        <StyleLink to="/projetos">Projetos</StyleLink>
      </StyleNav>
    </StyleContainer>
  );
};

export default StyleHeader;
