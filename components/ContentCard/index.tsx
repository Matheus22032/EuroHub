import { TouchableOpacity } from "react-native";
import ArrowButton from "../ArrowButton";
import { ContentProps } from "./props";
import * as S from "./style";
import { useRouter } from "expo-router";
const ContentCard: React.FC<ContentProps> = ({ title, subtitle, linkDirection, params }) => {

  const router = useRouter();

  const handlePress = () => {
    router.push(linkDirection);
  }

  return (
    <>
      <S.CardContainer onPress={handlePress}>
        <S.CardBackground source={require('../../assets/images/background-content-card.png')}>
          <S.ContainerCard>
            <S.ContentTitle>{title}</S.ContentTitle>
            <S.ContentSubtitle numberOfLines={2} ellipsizeMode="tail">{subtitle}</S.ContentSubtitle>
            <S.ContainerButton>
              <ArrowButton width="56px" type="card"/>
            </S.ContainerButton>
          </S.ContainerCard>
        </S.CardBackground>
      </S.CardContainer>
    </>
  )
}

export default ContentCard;
