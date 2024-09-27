import React from "react";

import * as S from "./styles";

const ProfileCard = () => {
  return (
    <>
      <S.Container>
        <S.IconStyle source={require("../../assets/images/defaultIcon.png")} />
        <S.TextWelcome>
          Bem vindo {"\n"}
          <S.TextName>Pedro Lima</S.TextName>{" "}
        </S.TextWelcome>
      </S.Container>
    </>
  );
};

export default ProfileCard;
