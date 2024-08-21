import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const HeroText = styled.Text`
  font-size: 40px;
  margin-right: 60px;
  color: ${Colors.cultured};
  font-family: "CabinetThin";
`;

export const SpanHeroText = styled(HeroText)`
  font-family: "CabinetBlack";
`

export const IndexContainer = styled.View`
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 150px;
`