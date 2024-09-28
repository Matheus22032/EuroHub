import { Link, useRouter } from "expo-router";
import React from "react";
import { ArrowButtonProps } from "./props";
import * as S from "./styles";

const ArrowButton: React.FC<ArrowButtonProps> = ({
  linkDirection,
  width,
  type,
}) => {
  const router = useRouter();
  const arrowSrc =
    type === "back"
      ? require("../../assets/images/arrowBackButton.png")
      : require("../../assets/images/arrowButton.png");

  const handleClick = () => {
    if (!linkDirection) return;
    if (type === "next") {
      router.push(linkDirection);
      return;
    }
  };

  return (
    <S.ArrowContainer
      width={width}
      onPress={handleClick}
      disabled={type != "next"}
    >
      <S.ArrowButton source={arrowSrc} />
    </S.ArrowContainer>
  );
};

export default ArrowButton;
