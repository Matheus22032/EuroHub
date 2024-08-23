import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import Container from "@/components/Container";
import ArrowButton from "@/components/ArrowButton";

const IndexTemplate = () => {
    return (
        <SafeAreaView>
          <Container type="default">
            <S.IndexContainer>
              <S.HeroText>Vamos melhorar
              a <S.SpanHeroText>saúde juntos!</S.SpanHeroText></S.HeroText>
                      <ArrowButton linkDirection={'/home'} width="82px" />
            </S.IndexContainer>
          </Container>
        </SafeAreaView>
      );
}

export default IndexTemplate;
