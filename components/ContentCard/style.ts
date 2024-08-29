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

export const CardContainer = styled.TouchableOpacity`
  width: 100%;
`

export const ContainerCard = styled.View`
  padding: 30px 20px 0 20px;
  width: 100%;
  height: 170px;
`;
export const ContentTitle = styled.Text`
  font-size: 32px;
  color: ${Colors.cultured};
  font-family: CabinetBold;
`;

export const ContentSubtitle = styled.Text`
  font-size: 16px;
  font-family: CabinetThin;
  color: ${Colors.cultured};
  margin: 10px 0 0 0;
  max-width: 80%;
`;

export const ContainerButton = styled.View`
  width: 100%;
  position: absolute;
  bottom: 5px;
  right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

