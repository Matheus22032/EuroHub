import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import React from "react";
import Container from "@/components/Container";
import ProfileCard from "@/components/ProfileCard";
import ContentCard from "@/components/ContentCard";

const HomeTemplate = () => {
  return (
    <>
      <SafeAreaView>
        <Container type="home">
          <S.HomeContainer>
            <S.ProfileContainer>
              <ProfileCard />
            </S.ProfileContainer>
            <S.HeroText>
              Inovando com Sabedoria, Crescendo com Propósito
            </S.HeroText>
            <S.CardsContainer>
              <ContentCard
                title={"Treinamentos"}
                subtitle={"Desenvolvendo o Potencial. \nSuperando Desafios"}
                linkDirection={"/treinamentos/treinamentoScreen"}
              />
              <ContentCard
                title={"Conhecimento"}
                subtitle={"O Saber que Move, a Excelência que Alcança"}
                linkDirection={"/conhecimento/conhecimentoScreen"}
              />
            </S.CardsContainer>
          </S.HomeContainer>
        </Container>
      </SafeAreaView>
    </>
  );
};

export default HomeTemplate;
