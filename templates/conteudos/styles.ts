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
    padding: 30px 30px;
`

export const TreinamentoParagraph = styled.Text`
    font-size: 18px;
    font-family: CabinetThin;
    color: ${Colors.cultured};
    padding: 10px 30px;
`

export const TreinamentoQuizTitle = styled.Text`
    font-size: 40px;
    font-family: CabinetMedium;
    color: ${Colors.cultured};
    text-align: center;
    padding: 30px 0 10px;
`

export const TreinamentoHeading = styled.Text<{level: number | undefined}>`
    font-size: ${({ level }) => {
    switch (level) {
      case 1:
      default:
        return '40px';
      case 2:
        return '35px';
      case 3:
        return '30px';
      case 4:
        return '25px';
      case 5:
        return '22px';
      case 6:
        return '20px';
    }
  }};
    font-family: CabinetMedium;
    color: ${Colors.cultured};
    padding: 10px 30px;
`


