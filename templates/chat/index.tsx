import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { Text, TouchableOpacity } from "react-native";
import Container from "@/components/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import GoBackContainer from "@/components/GoBackContainer";
import Ionicons from "@expo/vector-icons/Ionicons";

const ChatTemplate = () => {
  const [result, setResult] = useState<string>("Carregando...");
  const [inputText, setInputText] = useState<string>("");

  const fetchData = async () => {
    const urlIp = process.env.EXPO_PUBLIC_API_URL;
    const url = `${urlIp}:3001/ollama`;

    console.log(url);

    const body = {
      message: "Quais são os principais valores da Eurofarma?",
    };

    try {
      const response = await axios.post(url, body);

      console.log(response.data);
      setResult(response.data.content);

      if (!response) {
        console.error("Fetch Error:", response);
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Fetch Error:", error.message);
      } else {
        console.error("Unknown Error:", error);
      }
    }
  };

  return (
    <>
      <SafeAreaView>
        <Container type="default">
          <S.Container>
            <GoBackContainer link={"/home"} />
            <S.ChatTitle>Chat com Rochelle</S.ChatTitle>
            <S.ChatContainer>
              <S.MessageContainer>
                <S.ChatMessage $role="admin">
                  <S.ChatMessageText>Asad</S.ChatMessageText>
                </S.ChatMessage>
                <S.ChatBubbleTail $role="admin" />
              </S.MessageContainer>
              <S.MessageContainer>
                <S.ChatMessage $role="user">
                  <S.ChatMessageText>Asad</S.ChatMessageText>
                </S.ChatMessage>
                <S.ChatBubbleTail $role="user" />
              </S.MessageContainer>
            </S.ChatContainer>
          </S.Container>
          <S.InputChatContainer>
            <S.InputChat
              value={inputText}
              onChangeText={setInputText}
              placeholder="Faça uma pergunta para Rochelle"
              placeholderTextColor={"#fff"}
            />
            <TouchableOpacity>
              <Ionicons name="send-sharp" size={30} color="white" />
            </TouchableOpacity>
          </S.InputChatContainer>
        </Container>
      </SafeAreaView>
    </>
  );
};

export default ChatTemplate;
