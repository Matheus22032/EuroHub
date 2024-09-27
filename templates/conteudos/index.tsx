import GoBackContainer from "@/components/GoBackContainer";
import * as S from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import React, { LegacyRef, useEffect, useRef, useState } from "react";
import axios from "axios";
import { ScrollView, Text } from "react-native";
import { TreinamentoItem } from "@/interfaces/interfaces";
import QuizComponent from "@/components/QuizComponent";
import ImageComponent from "@/components/ImageComponent";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";

const ConteudosTemplate = () => {
  const [card, setCard] = useState<TreinamentoItem>();
  const cardId = useSelector((state: any) => state.id);
  const router = useRouter();

  const handleAuthentication = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    const enrolled = await LocalAuthentication.isEnrolledAsync();

    if (!compatible || !enrolled) {
      alert("Autenticação não disponível ou não configurada.");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Confirme que é você",
      fallbackLabel: "Usar senha",
    });

    if (result.success) {
      router.push("/conteudos/confirmIdentity");
    } else {
      alert("Autenticação falhou.");
    }
  };

  useEffect(() => {
    fetchTreinosData();
  }, [cardId]);

  const urlIp = process.env.EXPO_PUBLIC_API_URL;

  const url = `http://${urlIp}/api/treinos/${cardId}?populate=*`;

  const fetchTreinosData = async () => {
    try {
      const response = await axios.get(url);
      const data: TreinamentoItem = response.data.data;
      setCard(data);
    } catch (error) {
      console.log("error fetching data", error);
    }
  };

  return (
    <SafeAreaView>
      <S.TreinamentoContainer>
        <GoBackContainer />
        <S.TreinamentoTitle>{card?.attributes.ContentTitle}</S.TreinamentoTitle>
        <ScrollView>
          {card?.attributes.Content?.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <S.TreinamentoParagraph key={index}>
                  {item.children[0].text}
                </S.TreinamentoParagraph>
              );
            }
            if (item.type === "heading") {
              return (
                <S.TreinamentoHeading level={item.level} key={index}>
                  {item.children[0].text}
                </S.TreinamentoHeading>
              );
            }
            if (item.type === "image") {
              if (item.image) {
                return <ImageComponent key={index} image={item.image} />;
              }
            }
          })}
          {card?.attributes.Quiz && card.attributes.Quiz.length > 0 ? (
            <S.TreinamentoQuizTitle>Quiz</S.TreinamentoQuizTitle>
          ) : null}
          {card?.attributes.Quiz &&
            card.attributes.Quiz.map((quiz, quizIndex) => (
              <QuizComponent
                key={quizIndex}
                quizIndex={quizIndex}
                data={quiz}
              />
            ))}
          <S.FinishTraining onPress={handleAuthentication}>
            <S.FinishTrainingText>Finalizar Treinamento</S.FinishTrainingText>
          </S.FinishTraining>
        </ScrollView>
      </S.TreinamentoContainer>
    </SafeAreaView>
  );
};

export default ConteudosTemplate;
