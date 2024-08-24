import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const TreinamentoContainer = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 30px 0;
`;

export const TreinamentoTitle = styled.Text`
  font-size: 32px;
  font-family: CabinetBlack;
  color: ${Colors.cultured};
  padding: 30px 20px;
`

export const TreinamentoHeaderContent = styled.View`
  display: flex;
  flex-direction: column;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.outerSpace};
`

export const TreinamentosContent = styled.View`
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px 0;
`