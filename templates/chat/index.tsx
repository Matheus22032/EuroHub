import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { Text } from "react-native";

const ChatTemplate = () => {
    return (
        <>
            <SafeAreaView>
                <S.Container>
                    <Text>Rochelle</Text>
                </S.Container>
            </SafeAreaView>
        </>
    )
}

export default ChatTemplate;