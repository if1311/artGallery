import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 300px;
  height: auto;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid pink;
  object-fit: cover;
`;

export default function ImageInGallery(props) {
  return (
    <ImageWrapper>
      <StyledImage src={props.src}></StyledImage>
    </ImageWrapper>
  );
}
