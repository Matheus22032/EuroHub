import { ContentProps } from "./props";
import * as S from "./style";
const ContentCard : React.FC<ContentProps>= ({ title, subtitle}) => {

  return (
    <>
      <S.Card source={require('../../assets/images/background-content-card.png')}>
        <S.ContentTitle>{title}</S.ContentTitle>
        <S.ContentSubtitle>{subtitle}</S.ContentSubtitle>  
      </S.Card>
    </>
  )
}

export default ContentCard;
