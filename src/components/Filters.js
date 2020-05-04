import React from "react";
import styled from "styled-components";
import FilterItem from "./FilterItem";

const FiltersWrapper = styled.div`
  border: 2px solid black;
  height: 300px;
  overflow: scroll;
`;

export default function Filters() {
  return <FiltersWrapper></FiltersWrapper>;
}
