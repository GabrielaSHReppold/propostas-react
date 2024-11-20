import styled from "styled-components";

type TColor = "black" | "white";

interface TitleProps {
  color?: TColor;
}

export const Title = styled.h1<TitleProps>`
  font-size: 6rem;
  text-align: center;
  letter-spacing: 1px;
  color: ${(props) => (props.color === "white" ? "#ffffff" : "#000000")};
`;


