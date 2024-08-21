import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { Link } from "expo-router";
import Container from "@/components/Container";
import ArrowButton from "@/components/ArrowButton";

const IndexTemplate = () => {
    return (
        <SafeAreaView>
          <Container type="default">
            <S.IndexContainer>
              <S.HeroText>Vamos melhorar
              a <S.SpanHeroText>saúde juntos!</S.SpanHeroText></S.HeroText>
                      <ArrowButton />
            </S.IndexContainer>
          </Container>
        </SafeAreaView>
      );
}

export default IndexTemplate;