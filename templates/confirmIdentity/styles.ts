import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const ConfirmIdentityTitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  margin: 70px auto;
  gap: 10px;
`;

export const ConfirmIdentityTitle = styled.Text`
  font-size: 40px;
  font-family: CabinetBlack;
  color: ${Colors.cultured};
`;

export const ConfirmIdentitySubtitle = styled.Text`
  font-size: 32px;
  font-family: CabinetThin;
  color: ${Colors.cultured};
`;

export const RateText = styled.Text`
  font-size: 24px;
  font-family: CabinetBold;
  color: ${Colors.cultured};
  padding: 0 30px;
`;

export const NotaContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 30px;
  flex-wrap: wrap;
`;

export const Nota = styled.TouchableOpacity<{ $isActive: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid
    ${({ $isActive }) => ($isActive ? Colors.cultured : Colors.cultured)};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $isActive }) =>
    $isActive ? Colors.cultured : "transparent"};
`;

export const NotaText = styled.Text<{ $isActive: boolean }>`
  font-size: 24px;
  font-family: CabinetBold;
  color: ${({ $isActive }) =>
    $isActive ? Colors.chineseBlack : Colors.cultured};
`;

export const ArrowContainer = styled.View`
  display: flex;
  align-self: flex-end;
  padding: 180px 40px;
`;
