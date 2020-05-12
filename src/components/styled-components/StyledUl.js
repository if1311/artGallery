import styled from "styled-components";

export const StyledUl = styled.ul`
  height: 135px;
  overflow: scroll;
  display: flex;
  width: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 5px;
  margin: 0;
  align-self: center;

  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.3em;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;
