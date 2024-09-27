import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import Container from "@/components/Container";
import ArrowButton from "@/components/ArrowButton";
import { Provider } from "react-redux";
import React from "react";
import { store } from "@/redux/store";

const IndexTemplate = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Container type="default">
          <S.IndexContainer>
            <S.HeroText>
              Vamos melhorar a <S.SpanHeroText>saúde juntos!</S.SpanHeroText>
            </S.HeroText>

            <ArrowButton linkDirection={"/home"} width="82px" type="next" />
          </S.IndexContainer>
        </Container>
      </SafeAreaView>
    </Provider>
  );
};

export default IndexTemplate;
