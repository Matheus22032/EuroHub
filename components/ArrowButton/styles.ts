import styled from "styled-components/native";

export const ArrowContainer = styled.TouchableOpacity<{ width: string }>`
  width: ${props => props.width};
  height: auto;
`;

export const ArrowButton = styled.Image`
  width:100%;
  object-fit: contain;
`;
