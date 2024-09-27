import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const QuizContainer = styled.View`
  width: 100%;
  padding: 10px 30px 30px 0;
`;

export const AnswerContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 10px 30px;
  align-items: center;
`;

export const AnswerText = styled.Text<{
  $isWrong: boolean;
  $isActive: boolean;
}>`
  font-size: 20px;
  font-family: CabinetExtralight;

  color: ${({ $isWrong, $isActive }) =>
    $isActive && $isWrong
      ? Colors.persianRed
      : $isActive && !$isWrong
      ? Colors.mayGreen
      : Colors.cultured};
`;

export const AnswerButton = styled.View<{
  $isActive: boolean;
  $isWrong: boolean;
}>`
  background-color: ${({ $isWrong, $isActive }) =>
    $isActive && $isWrong
      ? Colors.persianRed
      : $isActive && !$isWrong
      ? Colors.mayGreen
      : "transparent"};

  border-radius: 40px;
  border-width: 1px;
  border-color: ${({ $isWrong, $isActive }) =>
    $isActive && $isWrong
      ? Colors.persianRed
      : $isActive && !$isWrong
      ? Colors.mayGreen
      : Colors.cultured};
  width: 20px;
  height: 20px;
`;
export const TreinamentoQuizQuestion = styled.Text`
  font-size: 20px;
  font-family: CabinetExtralight;
  color: ${Colors.cultured};
  padding: 10px 30px;
`;

export const TreinamentoQuizNumber = styled.Text`
  font-size: 20px;
  font-family: CabinetBold;
  color: ${Colors.cultured};
  padding: 10px 30px;
`;

export const TreinamentoQuizAnswer = styled.Text`
  font-size: 20px;
  font-family: CabinetExtralight;
  color: ${Colors.cultured};
  padding: 10px 30px;
`;
