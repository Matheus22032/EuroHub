import GoBackContainer from "@/components/GoBackContainer";
import * as S from "./styles";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

const ConteudosTemplate = () => {
    const { card } = useLocalSearchParams();

    return (
        <SafeAreaView>
            <S.TreinamentoContainer>
                <GoBackContainer />
                <S.TreinamentoTitle>{card}</S.TreinamentoTitle>
                <S.TreinamentoTitle>AAAGAGAGAGA</S.TreinamentoTitle>
            </S.TreinamentoContainer>
        </SafeAreaView>
    )
}

export default ConteudosTemplate;