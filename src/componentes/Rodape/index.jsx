import styled from "styled-components";

import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const RodapeEstilizado = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  background-color: #04244f;
  padding: 40px;
  box-sizing: border-box;
`;

const IconeContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    margin-right: 32px;
  }
`;

const RodapeTexto = styled.p`
  font-size: 16px;
  color: white;
  margin: 0;
`;

function Rodape() {
  return (
    <RodapeEstilizado>
      <IconeContainer>
        <li>
          <a href="https://github.com/pedrofaleirosss">
            <FaGithub size={30} color="white" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/pedro-faleiros-172360309">
            <FaLinkedin size={30} color="white" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/pedrofaleirosss">
            <FaInstagram size={30} color="white" />
          </a>
        </li>
      </IconeContainer>
      <RodapeTexto>Desenvolvido por Pedro Faleiros.</RodapeTexto>
    </RodapeEstilizado>
  );
}

export default Rodape;
