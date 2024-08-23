import ArrowButton from "../ArrowButton";
import { ContentProps } from "./props";
import * as S from "./style";
const ContentCard: React.FC<ContentProps> = ({ title, subtitle, linkDirection }) => {

  return (
    <>
      <S.CardBackground source={require('../../assets/images/background-content-card.png')}>
        <S.ContainerCard>
          <S.ContentTitle>{title}</S.ContentTitle>
          <S.ContentSubtitle>{subtitle}</S.ContentSubtitle>
          <S.ContainerButton>
            <ArrowButton linkDirection={linkDirection} width="56px" />
          </S.ContainerButton>

        </S.ContainerCard>
      </S.CardBackground>
    </>
  )
}

export default ContentCard;
