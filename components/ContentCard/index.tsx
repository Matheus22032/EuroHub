import ArrowButton from "../ArrowButton";
import { ContentProps } from "./props";
import * as S from "./style";
const ContentCard: React.FC<ContentProps> = ({ title, subtitle, linkDirection }) => {

  return (
    <>
      <S.CardBackground source={require('../../assets/images/background-content-card.png')}>
        <S.ContainerCard>
          <S.ContentTitle>{title}</S.ContentTitle>
          <S.ContentSubtitle numberOfLines={2} ellipsizeMode="tail">{subtitle}</S.ContentSubtitle>
          <S.ContainerButton>
            <ArrowButton linkDirection={linkDirection} width="56px" type="next" />
          </S.ContainerButton>
        </S.ContainerCard>
      </S.CardBackground>
    </>
  )
}

export default ContentCard;
