import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const ImageContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 20px 30px;
`

export const Image = styled.Image`
    width: 100%;
    height: 300px;
    border-radius: 10px;
`

export const Caption = styled.Text`
  font-size: 14px;
  color: ${Colors.cultured};
  font-family: CabinetThin;
  margin-top: 5px;
`;
