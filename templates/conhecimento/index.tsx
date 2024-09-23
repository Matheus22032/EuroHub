import Container from "@/components/Container";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import GoBackContainer from "@/components/GoBackContainer";
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cardSlice } from "@/redux/store";
import { TreinamentoItem } from "@/interfaces/interfaces";
import ConhecimentoCard from "@/components/ConhecimentoCard";

const ConhecimentoTemplate = () => {
  const dispatch = useDispatch();

  const [cards, setCards] = useState<TreinamentoItem[]>([]);
  const [activeTag, setActiveTag] = useState<number>(0);

  const onClickTag = (index: number) => {
    setActiveTag(index);
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
    dispatch(cardSlice.actions.setCurrentCard(id));
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
                    $isActive={activeTag === index}
                    onPress={() => setActiveTag(index)}
                    key={tag}
                  >
                    <S.ConhecimentoTagText $isActive={activeTag === index}>
                      {tag}
                    </S.ConhecimentoTagText>
                  </S.ConhecimentoTag>
                ))}
              </S.ConhecimentoTagsContainer>
            </ScrollView>
          </S.ConhecimentoHeaderContent>
          <ScrollView>
            <S.ConhecimentosContent>
              <ConhecimentoCard
                title="titulo"
                subtitle="subtitulo"
                linkDirection={"/conteudos/conteudoScreen"}
                pressFunction={() => setCardId(1)}
                tags={["tag1", "tag2", "tag3", "tag4", "tag5"]}
                coverImage={{
                  url: "https://picsum.photos/200/300",
                  alt: "image",
                }}
              />
            </S.ConhecimentosContent>
          </ScrollView>
        </S.ConhecimentoContainer>
      </Container>
    </SafeAreaView>
  );
};

export default ConhecimentoTemplate;
