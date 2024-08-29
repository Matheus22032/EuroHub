import { useRouter } from "expo-router";
import ArrowButton from "../ArrowButton";
import * as S from "./styles";

const GoBackContainer = () => {

    const router = useRouter();

    const handlePress = () => {
        router.back();
    }

    return (
        <S.BackContainer onPress={handlePress}>
            <ArrowButton width="40px" type="back" />
            <S.BackText>Voltar</S.BackText>
        </S.BackContainer>
    )
}

export default GoBackContainer;