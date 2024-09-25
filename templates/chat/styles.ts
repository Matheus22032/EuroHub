import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";
import C from './const';

export const Container = styled.View`
  display: flex;
  flex: 1; /* Ocupa o espaço disponível na tela */
  padding: 20px 0;
`;

export const ChatTitle = styled.Text`
  font-size: 32px;
  font-family: CabinetBlack;
  color: ${Colors.cultured};
  padding: 30px 20px 5px;
  border-bottom-width: 1px;
  border-bottom-color: #47494a;
`;

export const InputChatContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 22px 12px;
  background-color: #011324;
  width: 100%;
  border-radius: 10px 10px 0 0;
  align-items: center;
  gap: 11px;
`;

export const InputChat = styled.TextInput`
  background-color: rgba(85, 85, 85, 0.8);
  color: ${Colors.cultured};
  font-family: CabinetThin;
  flex: 1;
  padding: 13px;
  border-radius: 30px;
`;

export const ChatContainer = styled.ScrollView`
  display: flex;
  flex: 1; 
  flex-direction: column;
  padding: 60px 15px;
  margin-bottom: 40px;
`;

export const MessageContainer = styled.View`
  position: relative; 
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

export const ChatMessage = styled.View<{ $role: string }>`
  padding: 12px;
  margin-left: ${({ $role }) => $role === "user" ? "0" : "15px"};;
  margin-right: ${({ $role }) => $role === "user" ? "15px" : "0"};;
  border-radius: ${({ $role }) => $role === "user" ? "20px 20px 0 20px" : "20px 20px 20px 0"};
  background-color: rgba(85, 85, 85, 0.8);
  width: ${({ $role }) => $role === "user" ? "40%" : "50%"};
  z-index: 1;
  align-self: ${({ $role }) => $role === "user" ? "flex-end" : "flex-start"}; 
`;

export const ChatBubbleTail = styled.ImageBackground<{ $role: string }>`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: #fff; 
  background-size: cover;
  background-image: ${({ $role }) => $role === "user" ? `url('${C.userIcon}')` : "url('/assets/images/rochelle.png')"};
  align-self: ${({ $role }) => $role === "user" ? "flex-end" : "flex-start"};
  z-index: 0;  
`;

export const ChatMessageText = styled.Text`
  color: ${Colors.cultured};
  font-family: CabinetRegular;
`;
