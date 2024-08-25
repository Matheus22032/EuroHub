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
    font-size: 32px;
    font-family: CabinetBlack;
    color: ${Colors.cultured};
    padding: 30px 20px;
`