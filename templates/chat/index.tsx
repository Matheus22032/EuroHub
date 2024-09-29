import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import * as S from "./styles";
import {
  ActivityIndicator,
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import Container from "@/components/Container";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import GoBackContainer from "@/components/GoBackContainer";
import C from "./const";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ChatProps } from "@/interfaces/interfaces";

const ChatTemplate = () => {
  const [inputText, setInputText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatProps[]>(C.messages);
  const scrollViewRef = useRef<ScrollView>(null);

  interface fetchProps {
    message: string;
  }

  const fetchData = async ({ message }: fetchProps) => {
    const urlIp = process.env.EXPO_PUBLIC_IP_URL;
    const url = `${urlIp}:3001/ollama`;
    // console.log(url);

    const body = {
      message: message,
    };

    setInputText("");
    Keyboard.dismiss();
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }

    try {
      const response = await axios.post(url, body);

      // console.log(response.data);

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: response.data.role, message: response.data.content },
      ]);

      if (!response) {
        console.error("Fetch Error:", response);
        return;
      }
    } catch (error) {
      console.error("Fetch Error:", error);

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          message: "Erro ao fazer requisição, por favor tente novamente!",
        },
      ]);
    } finally {
      setIsLoading(false);
      setIsDisabled(false);
    }
  };

  const sendMessage = async () => {
    setIsLoading(true);
    setIsDisabled(true);
    setMessages([...messages, { role: "user", message: inputText }]);
    await fetchData({ message: inputText });
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <>
      <SafeAreaView>
        <Container type="default">
          <S.Container>
            <GoBackContainer link={"/home"} />
            <S.ChatTitle>Chat com Rochelle</S.ChatTitle>
            <S.ChatContainer alwaysBounceVertical ref={scrollViewRef}>
              {messages.map((message) => (
                <S.MessageContainer key={message.message}>
                  <S.ChatMessage $role={message.role}>
                    <S.ChatMessageText>{message.message}</S.ChatMessageText>
                  </S.ChatMessage>
                  <S.ChatBubbleTail
                    $role={message.role}
                    source={
                      message.role === "assistant" ? C.chatIcon : C.userIcon
                    }
                  />
                </S.MessageContainer>
              ))}
            </S.ChatContainer>
          </S.Container>
          <S.InputChatContainer>
            <S.InputChat
              value={inputText}
              onChangeText={setInputText}
              placeholder="Faça uma pergunta para Rochelle"
              placeholderTextColor={"#fff"}
            />
            <TouchableOpacity
              onPress={sendMessage}
              disabled={isDisabled || inputText.length === 0}
            >
              {isLoading ? (
                <ActivityIndicator size={30} color="#fff" />
              ) : (
                <Ionicons name="send-sharp" size={30} color="white" />
              )}
            </TouchableOpacity>
          </S.InputChatContainer>
        </Container>
      </SafeAreaView>
    </>
  );
};

export default ChatTemplate;
