import GoBackContainer from "@/components/GoBackContainer";
import * as S from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const ConteudosTemplate = () => {
    const card = useSelector((state) => state.card);

    return (
        <SafeAreaView>
            <S.TreinamentoContainer>
                <GoBackContainer />
                <S.TreinamentoTitle>{card.id}</S.TreinamentoTitle>
                <S.TreinamentoTitle>{card.attributes.ContentTitle}</S.TreinamentoTitle>
            </S.TreinamentoContainer>
        </SafeAreaView>
    )
}

export default ConteudosTemplate;