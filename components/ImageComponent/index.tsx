import { ImageComponentProps } from "./props";
import * as S from "./styles";
import React from "react";

const ImageComponent = ({ image }: ImageComponentProps) => {
  const replaceUrl = image.url.replace("localhost", "192.168.0.189");

  return (
    <S.ImageContainer>
      <S.Image source={{ uri: replaceUrl }} alt={image.alt} />
      <S.Caption>{image.caption}</S.Caption>
    </S.ImageContainer>
  );
};

export default ImageComponent;
