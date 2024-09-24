import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { Text, TouchableOpacity } from "react-native";
import Container from "@/components/Container";
import { useEffect, useState } from "react";
import axios from "axios";

const ChatTemplate = () => {
  const [result, setResult] = useState<string>("Carregando...");

  const fetchData = async () => {
    console.log("Fetching data...");
    const url = "http://192.168.0.157:3001/ollama";    
    const body = {
      message: "Quais são os principais valores da Eurofarma?"
    }

    try {
      console.log("Fetching data...2");

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
          <TouchableOpacity onPress={() => fetchData()}>
            <Text>Recarregar</Text>
          </TouchableOpacity>
          <Text>{result}</Text>
          
        </Container>
      </SafeAreaView>
    </>
  );
};

export default ChatTemplate;