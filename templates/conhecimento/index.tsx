import Container from "@/components/Container";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import GoBackContainer from "@/components/GoBackContainer";
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardSlice } from "@/redux/store";
import {
  ConhecimentoAttributes,
  ConhecimentoItem,
  TreinamentoItem,
} from "@/interfaces/interfaces";
import ConhecimentoCard from "@/components/ConhecimentoCard";
import React from "react";
import axios from "axios";

const ConhecimentoTemplate = () => {
  const dispatch = useDispatch();

  const [cards, setCards] = useState<ConhecimentoItem[]>([]);
  const [filteredCards, setFilteredCards] = useState<ConhecimentoItem[]>([]);
  const [activeTag, setActiveTag] = useState<string>("Todos");

  const onClickTag = (tag: string) => {
    setActiveTag(tag);
    if (tag === "Todos") {
      setFilteredCards(cards);
      return;
    }
    setFilteredCards(
      cards.filter((card) =>
        card.attributes.tags.data
          .map((tag) => tag.attributes.TagName)
          .includes(tag)
      )
    );
  };

  const tags = [
    "Todos",
    "Inovação",
    "Gestão",
    "Tecnologia",
    "Qualidade",
    "Produção",
    "RH",
  ];

  const setCardId = (id: number) => {
    dispatch(cardSlice.actions.setCurrentCard({ id, type: "conhecimentos" }));
  };

  useEffect(() => {
    fetchTreinosData();
  }, []);

  const urlIp = process.env.EXPO_PUBLIC_API_URL;

  const url = `${urlIp}:1337/api/conhecimentos?populate=*`;

  const fetchTreinosData = async () => {
    try {
      const response = await axios.get(url);

      const data: ConhecimentoItem[] = response.data.data;
      setCards(data);
      setFilteredCards(data.filter((card) => card.attributes.tags.data.length));
    } catch (error) {
      console.log("error fetching dataa", error);
    }
  };

  return (
    <SafeAreaView>
      <Container type="default">
        <S.ConhecimentoContainer>
          <S.ConhecimentoHeaderContent>
            <GoBackContainer link="/home" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <S.ConhecimentoTagsContainer>
                {tags.map((tag, index) => (
                  <S.ConhecimentoTag
                    $isActive={activeTag === tag}
                    onPress={() => onClickTag(tag)}
                    key={tag}
                  >
                    <S.ConhecimentoTagText $isActive={activeTag === tag}>
                      {tag}
                    </S.ConhecimentoTagText>
                  </S.ConhecimentoTag>
                ))}
              </S.ConhecimentoTagsContainer>
            </ScrollView>
          </S.ConhecimentoHeaderContent>
          <ScrollView>
            <S.ConhecimentosContent>
              {filteredCards.map((card) => (
                <ConhecimentoCard
                  key={card.id}
                  title={card.attributes.ContentTitle}
                  subtitle={card.attributes.ContentDescription}
                  linkDirection={"/conteudos/conteudoScreen"}
                  pressFunction={() => setCardId(card.id)}
                  tags={card.attributes.tags.data.map(
                    (tag) => tag.attributes.TagName
                  )}
                  publishedAt={card.attributes.publishedAt}
                />
              ))}
            </S.ConhecimentosContent>
          </ScrollView>
        </S.ConhecimentoContainer>
      </Container>
    </SafeAreaView>
  );
};

export default ConhecimentoTemplate;
