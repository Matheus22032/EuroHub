import { Href, useRouter } from "expo-router";
import ArrowButton from "../ArrowButton";
import * as S from "./styles";
import { GoBackContainerProps } from "./props";
import React from "react";

const GoBackContainer = ({ link }: GoBackContainerProps) => {
  const router = useRouter();

  const handlePress = () => {
    link ? router.push(link) : router.back();
  };

  return (
    <S.BackContainer onPress={handlePress}>
      <ArrowButton width="40px" type="back" />
      <S.BackText>Voltar</S.BackText>
    </S.BackContainer>
  );
};

export default GoBackContainer;
