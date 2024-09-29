import styled from "styled-components/native";
import { Colors } from "@/constants/Colors";

export const IconStyle = styled.Image`
  width: 77px;
  height: 77px;
  margin: 0 12px 0 0;
  border: 2px solid ${Colors.chineseBlack};
  border-radius: 77px;
`;

export const TextWelcome = styled.Text`
  font-family: CabinetThin;
  font-size: 24px;
  color: ${Colors.cultured};
`;

export const TextName = styled.Text`
  font-family: CabinetBold;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
