import styled from "styled-components";

interface ContainerProps {
  flexDirection?: "row" | "column";
  gap?: string;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection ?? "row"};
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 40px; 
  gap: ${(props) => props.gap ?? "0px"};
  
  width: 100vw;
  margin: 0; 
  
  height: 40vh;


  flex-wrap: wrap;

`;
