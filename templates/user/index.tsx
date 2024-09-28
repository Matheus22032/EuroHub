import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { Text } from "react-native";
import Container from "@/components/Container";
import React from "react";

const UserTemplate = () => {
  return (
    <>
      <SafeAreaView>
        <Container type="default">
          <Text>Tela de usuário (ultima coisa e olhe la)</Text>
        </Container>
      </SafeAreaView>
    </>
  );
};

export default UserTemplate;
