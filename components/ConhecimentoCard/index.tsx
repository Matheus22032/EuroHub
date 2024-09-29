import { TouchableOpacity } from "react-native";
import ArrowButton from "../ArrowButton";
import { ContentProps } from "./props";
import * as S from "./style";
import { useRouter } from "expo-router";
import ImageComponent from "../ImageComponent";
import React from "react";
const ConhecimentoCard: React.FC<ContentProps> = ({
  title,
  subtitle,
  linkDirection,
  pressFunction,
  tags,
  publishedAt,
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
            <S.ContentTagsContainer>
              {tags?.map((tag, index) => (
                <S.ContentTagText key={index}>#{tag}</S.ContentTagText>
              ))}
            </S.ContentTagsContainer>
            <S.BottomContent $hasDate={publishedAt ? true : false}>
              <S.ContentSubtitle numberOfLines={2} ellipsizeMode="tail">
                Publicado em{" "}
                <S.ExpireDate>{formatDate(publishedAt)}</S.ExpireDate>
              </S.ContentSubtitle>
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

export default ConhecimentoCard;
