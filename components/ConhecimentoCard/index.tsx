import { TouchableOpacity } from "react-native";
import ArrowButton from "../ArrowButton";
import { ContentProps } from "./props";
import * as S from "./style";
import { useRouter } from "expo-router";
import ImageComponent from "../ImageComponent";
const ConhecimentoCard: React.FC<ContentProps> = ({
  title,
  subtitle,
  linkDirection,
  pressFunction,
  tags,
  coverImage,
}) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(linkDirection);
    if (pressFunction) {
      pressFunction();
    }
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
            <S.ContainerButton>
              <ArrowButton width="56px" type="card" />
            </S.ContainerButton>
          </S.ContainerCard>
        </S.CardBackground>
      </S.CardContainer>
    </>
  );
};

export default ConhecimentoCard;
