import * as S from "./styles"


const ProfileCard = () => {
  return (
    <>
      <S.Container>
        <S.IconStyle source={require('../../assets/images/defaultIcon.png')} />
        <S.TextWelcome>Bem vindo {'\n'}<S.TextName>Pedro</S.TextName> </S.TextWelcome>
      </S.Container>
    </>
  )
}

export default ProfileCard;
