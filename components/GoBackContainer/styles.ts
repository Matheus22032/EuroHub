import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const BackContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
`

export const BackText = styled.Text`
    font-size: 20px;
    color: ${Colors.cultured};
    font-family: CabinetThin;
`