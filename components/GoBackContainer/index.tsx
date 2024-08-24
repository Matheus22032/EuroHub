import ArrowButton from "../ArrowButton";
import * as S from "./styles";

const GoBackContainer = () => {
    return (
        <S.BackContainer>
            <ArrowButton width="40px" type="back" />
            <S.BackText>Voltar</S.BackText>
        </S.BackContainer>
    )
}

export default GoBackContainer;