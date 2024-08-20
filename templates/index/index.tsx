import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { Link } from "expo-router";

const IndexTemplate = () => {
    return (
        <SafeAreaView>
          <S.Container>
            <S.TesteText>Vamos melhorar
            a saúde juntos!</S.TesteText>
            <TouchableOpacity>
                <Link href='/home'>
                    <Text>Entrar</Text>
                </Link>
            </TouchableOpacity>
          </S.Container>
        </SafeAreaView>
      );
}

export default IndexTemplate;