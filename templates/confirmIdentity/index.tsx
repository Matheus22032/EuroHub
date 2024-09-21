import Container from "@/components/Container";
import { BackContainer } from "@/components/GoBackContainer/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { Text } from "react-native";
import { useState } from "react";
import ArrowButton from "@/components/ArrowButton";

const ConfirmIdentityTemplate = () => {
  const [rate, setRate] = useState<number | null>(null);

  return (
    <SafeAreaView>
      <Container type="default">
        <S.Container>
          <S.ConfirmIdentityTitleContainer>
            <S.ConfirmIdentityTitle>
              Obrigado pelo seu empenho!
            </S.ConfirmIdentityTitle>
            <S.ConfirmIdentitySubtitle>
              Sua dedicação nos inspira a seguir em frente juntos.
            </S.ConfirmIdentitySubtitle>
          </S.ConfirmIdentityTitleContainer>
          <S.RateText>Avalie esse Treinamento</S.RateText>
          <S.NotaContainer>
            {Array.from({ length: 5 }, (_, i) => (
              <S.Nota
                $isActive={rate === i + 1}
                key={i}
                onPress={() => setRate(i + 1)}
              >
                <S.NotaText $isActive={rate === i + 1}>{i + 1}</S.NotaText>
              </S.Nota>
            ))}
          </S.NotaContainer>
          <S.ArrowContainer>
            <ArrowButton
              width="82px"
              type="next"
              linkDirection="/treinamentos/treinamentoScreen"
            />
          </S.ArrowContainer>
        </S.Container>
      </Container>
    </SafeAreaView>
  );
};

export default ConfirmIdentityTemplate;
