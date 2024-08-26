import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const TreinamentoContainer = styled.View`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: ${Colors.smokyBlack};
    padding: 30px 0;
`;

export const TreinamentoTitle = styled.Text`
    font-size: 40px;
    font-family: CabinetBlack;
    color: ${Colors.cultured};
    padding: 30px 20px;
`

export const TreinamentoParagraph = styled.Text`
    font-size: 18px;
    font-family: CabinetThin;
    color: ${Colors.cultured};
    padding: 10px 20px;
`

export const TreinamentoQuizTitle = styled.Text`
    font-size: 40px;
    font-family: CabinetMedium;
    color: ${Colors.cultured};
    text-align: center;
`

export const TreinamentoQuizQuestion = styled.Text`
    font-size: 20px;
    font-family: CabinetExtralight;
    color: ${Colors.cultured};
    padding: 10px 20px;
`

export const TreinamentoQuizNumber = styled.Text`
    font-size: 20px;
    font-family: CabinetBold;
    color: ${Colors.cultured};
    padding: 10px 20px;
`

export const TreinamentoQuizAnswer = styled.Text`
    font-size: 20px;
    font-family: CabinetExtralight;
    color: ${Colors.cultured};
    padding: 10px 20px;
`

