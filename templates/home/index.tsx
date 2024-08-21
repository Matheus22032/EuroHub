import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { Text } from "react-native";

const HomeTemplate = () => {
    return (
        <>
            <SafeAreaView>
                <S.Container>
                    <Text>Inovando com Sabedoria, Crescendo com Propósito</Text>
                </S.Container>
            </SafeAreaView>
        </>
    )
}

export default HomeTemplate;
