import Container from "@/components/Container";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import GoBackContainer from "@/components/GoBackContainer";
import ContentCard from "@/components/ContentCard";
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cardSlice } from "@/redux/store";
import { TreinamentoItem } from "@/interfaces/interfaces";
import React from "react";
import { User } from "@/constants/User";

const TreinamentoTemplate = () => {
  const dispatch = useDispatch();

  const [cards, setCards] = useState<TreinamentoItem[]>([]);

  const setCardId = (id: number) => {
    dispatch(cardSlice.actions.setCurrentCard({ id, type: "treinos" }));
  };

  useEffect(() => {
    fetchTreinosData();
  }, []);

  const employeeId = User.id;

  const currentDate = new Date().toISOString(); // Pega a data atual em formato ISO

  const urlIp = process.env.EXPO_PUBLIC_API_URL;

  const url = `${urlIp}:1337/api/treinos?filters[employees][employee_id][$eq]=${employeeId}&filters[expireDate][$gt]=${currentDate}`;

  const fetchTreinosData = async () => {
    try {
      const response = await axios.get(url);

      const data: TreinamentoItem[] = response.data.data;
      setCards(data);
    } catch (error) {
      console.log("error fetching data", error);
    }
  };

  return (
    <SafeAreaView>
      <Container type="default">
        <S.TreinamentoContainer>
          <S.TreinamentoHeaderContent>
            <GoBackContainer link="/home" />
            <S.TreinamentoTitle>Seus Treinamentos</S.TreinamentoTitle>
          </S.TreinamentoHeaderContent>
          <ScrollView>
            <S.TreinamentosContent>
              {cards.map((card) => (
                <ContentCard
                  key={card.id}
                  expireDate={card.attributes.expireDate}
                  title={card.attributes.ContentTitle}
                  subtitle={card.attributes.ContentDescription}
                  linkDirection={"/conteudos/conteudoScreen"}
                  pressFunction={() => setCardId(card.id)}
                />
              ))}
            </S.TreinamentosContent>
          </ScrollView>
        </S.TreinamentoContainer>
      </Container>
    </SafeAreaView>
  );
};

export default TreinamentoTemplate;
