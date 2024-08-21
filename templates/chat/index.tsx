import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { Text } from "react-native";
import Container from "@/components/Container";

const ChatTemplate = () => {
    return (
        <>
            <SafeAreaView>
                <Container type="default">
                    <Text>Rochelle</Text>
                </Container>
            </SafeAreaView>
        </>
    )
}

export default ChatTemplate;