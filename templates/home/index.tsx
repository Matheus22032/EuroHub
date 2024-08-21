import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { Text } from "react-native";
import Container from "@/components/Container";

const HomeTemplate = () => {
    return (
        <>
            <SafeAreaView>
                <Container type="home">
                    <Text>Inovando com Sabedoria, Crescendo com Propósito</Text>
                </Container>
            </SafeAreaView>
        </>
    )
}

export default HomeTemplate;