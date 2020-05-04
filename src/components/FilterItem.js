import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  padding: 10px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export default function FilterItem(props) {
  return <StyledLi onClick={props.function}>{props.name}</StyledLi>;
}
