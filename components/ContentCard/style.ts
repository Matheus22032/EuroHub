import { Colors } from "@/constants/Colors"
import styled from "styled-components/native";

export const Card = styled.ImageBackground`
  width: 100%;
  height:100%;
  border-radius: 20px;
  border: solid 1px;
  border-color: ${Colors.philippineGray};
  height: 100px;
  overflow: hidden;


`;

export const ContentTitle = styled.Text`
  font-size: 30px;
  color: ${Colors.cultured};
  font-family: CabinetBold;
`;

export const ContentSubtitle = styled.Text`
  font-size: 15px;
  font-family: CabinetThin;
  color: ${Colors.cultured};
`;
