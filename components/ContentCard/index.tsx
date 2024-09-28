import { Text, TouchableOpacity } from "react-native";
import React from "react";
import ArrowButton from "../ArrowButton";
import { ContentProps } from "./props";
import * as S from "./style";
import { useRouter } from "expo-router";
const ContentCard: React.FC<ContentProps> = ({
  title,
  subtitle,
  linkDirection,
  pressFunction,
  expireDate,
}) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(linkDirection);
    if (pressFunction) {
      pressFunction();
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() retorna 0 para janeiro, então somamos 1
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
  };

  return (
    <>
      <S.CardContainer onPress={handlePress}>
        <S.CardBackground
          source={require("../../assets/images/background-content-card.png")}
        >
          <S.ContainerCard>
            <S.ContentTitle>{title}</S.ContentTitle>
            <S.ContentSubtitle numberOfLines={2} ellipsizeMode="tail">
              {subtitle}
            </S.ContentSubtitle>

            <S.BottomContent $hasDate={expireDate ? true : false}>
              {expireDate ? (
                <S.ContentSubtitle>
                  Expira em{" "}
                  <S.ExpireDate>{formatDate(expireDate)}</S.ExpireDate>
                </S.ContentSubtitle>
              ) : null}
              <S.ContainerButton>
                <ArrowButton width="56px" type="card" />
              </S.ContainerButton>
            </S.BottomContent>
          </S.ContainerCard>
        </S.CardBackground>
      </S.CardContainer>
    </>
  );
};

export default ContentCard;
