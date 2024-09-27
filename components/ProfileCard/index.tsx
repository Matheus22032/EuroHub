import { User } from "@/constants/User";
import React from "react";

import * as S from "./styles";

const ProfileCard = () => {
  return (
    <>
      <S.Container>
        <S.IconStyle source={require(User.photo)} />
        <S.TextWelcome>
          Bem vindo {"\n"}
          <S.TextName>{User.name}</S.TextName>{" "}
        </S.TextWelcome>
      </S.Container>
    </>
  );
};

export default ProfileCard;
