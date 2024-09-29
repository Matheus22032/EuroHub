import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const ConhecimentoContainer = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 30px 0;
`;

export const ConhecimentoHeaderContent = styled.View`
  display: flex;
  flex-direction: column;
`;

export const ConhecimentosContent = styled.View`
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px 0;
`;

export const ConhecimentoTagsContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 80px 20px 0px;
`;

export const ConhecimentoTag = styled.TouchableOpacity<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isActive }) =>
    $isActive ? Colors.cultured : "rgba(105, 105, 105, 0.7)"};
  padding: 8px 12px;
  border-radius: 12px;
`;

export const ConhecimentoTagText = styled.Text<{ $isActive: boolean }>`
  font-size: 16px;
  font-family: ${({ $isActive }) =>
    $isActive ? "CabinetMedium" : "CabinetThin"};
  color: ${({ $isActive }) =>
    $isActive ? Colors.chineseBlack : Colors.cultured};
`;
