import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const SignatureModalContainer = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  padding: 30px 0 0;
  z-index: 998;
  top: 0;
  left: 0;
`;

export const SignatureModalContent = styled.View`
  display: flex;
  margin: auto;
  background-color: ${Colors.smokyBlack};
  padding: 30px;
  opacity: 1;
  z-index: 999;
  height: 100%;
  width: 100%;
`;

export const HeaderModal = styled.View`
  display: flex;
  justify-content: end;
`;

export const SignatureModalClose = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5px;
`;

export const CloseBar = styled.View`
  width: 30px;
  height: 3px;
  background-color: ${Colors.cultured};
  position: absolute;
  border-radius: 5px;
`;

export const CloseBar1 = styled(CloseBar)`
  transform: rotate(45deg);
`;

export const CloseBar2 = styled(CloseBar)`
  transform: rotate(-45deg);
`;

export const CloseContainer = styled.View`
  position: relative;
  width: 30px;
  height: 30px;
`;

export const SignatureModalTitle = styled.Text`
  font-size: 32px;
  font-family: CabinetBold;
  color: #000;
  color: ${Colors.cultured};
`;

export const SignatureBox = styled.View`
  border: 5px dashed ${Colors.cultured};
  width: 100%;
  height: 70%;
  margin: 25px auto;
`;

export const SignatureButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SignatureButton = styled.TouchableOpacity`
  background-color: ${Colors.philippineGray};
  padding: 20px 40px;
  width: 45%;
  border-radius: 20px;
`;

export const SignatureSendButton = styled(SignatureButton)<{
  $isDisabled: boolean;
}>`
  background-color: ${Colors.yellowRose};
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
`;

export const SignatureButtonText = styled.Text`
  color: ${Colors.smokyBlack};

  font-size: 20px;
  font-family: CabinetBold;
  text-align: center;
`;
