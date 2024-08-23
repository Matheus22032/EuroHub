import { Colors } from "@/constants/Colors"
import styled from "styled-components/native";

export const CardBackground = styled.ImageBackground`
  width: 100%;
  height:100%;
  border-radius: 20px;
  border: solid 1px;
  border-color: ${Colors.philippineGray};
  height: auto;
  overflow: hidden;
`;

export const ContainerCard = styled.View`
  padding: 30px 20px 0 20px;
  width: 100%;
`;
export const ContentTitle = styled.Text`
  font-size: 32px;
  color: ${Colors.cultured};
  font-family: CabinetBold;
`;

export const ContentSubtitle = styled.Text`
  font-size: 15px;
  font-family: CabinetThin;
  color: ${Colors.cultured};
  margin: 7px 0 -25px 0;
`;

export const ContainerButton = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

