import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { Text } from "react-native";

const UserTemplate = () => {
    return (
        <>
            <SafeAreaView>
                <S.Container>
                    <Text>Tela de usuário (ultima coisa e olhe la)</Text>
                </S.Container>
            </SafeAreaView>
        </>
    )
}

export default UserTemplate;