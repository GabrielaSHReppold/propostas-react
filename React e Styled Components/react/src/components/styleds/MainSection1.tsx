import styled from "styled-components";
import image1 from '../../assets/imagens/image1.jpg';

export const MainSection1 = styled.section`
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;

  
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  font-family: Arial, sans-serif;


  background: ${`url(${image1})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

`;

