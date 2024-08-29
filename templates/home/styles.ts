import styled from "styled-components/native";
import { Colors } from "@/constants/Colors";

export const HomeContainer = styled.View`
  display: flex;
  height: 100%;
  width: 90%;
  padding: 50px 0 0 0;
  align-items: center;
`;

export const HeroText = styled.Text`
  margin: 70px 0;
  color: ${Colors.cultured};
  font-family: CabinetThin;
  font-size: 30px;
`;

export const ProfileContainer = styled.View`
  width:100%;
`;


export const CardsContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;
