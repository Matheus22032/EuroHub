import GoBackContainer from "@/components/GoBackContainer";
import * as S from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ScrollView } from "react-native";

const ConteudosTemplate = () => {
    const [card, setCard] = useState<TreinamentoItem>();
    const cardId = useSelector((state: any) => state.id);

    useEffect(() => {
        fetchTreinosData();
    }, [cardId]); // Adicione o cardId como dependência para garantir que a função seja chamada quando ele mudar

    const url = `http://192.168.0.189:1337/api/treinos/${cardId}?populate=*`;

    const fetchTreinosData = async () => {
        try {
            const response = await axios.get(url);
            const data: TreinamentoItem = response.data.data;
            setCard(data);
        } catch (error) {
            console.log('error fetching data', error);
        }
    }

    useEffect(() => {
        if (card) {
            card.attributes.Content?.map(item => console.log(item)
            ); // Aqui você verá o valor atualizado de card
        }
    }, [card]);

    return (
        <SafeAreaView>
            <S.TreinamentoContainer>
                <GoBackContainer />
                <S.TreinamentoTitle>{card?.attributes.ContentTitle}</S.TreinamentoTitle>
                <ScrollView>
                    {
                        card?.attributes.Content?.map((item, index) => {
                            if (item.type === 'paragraph') {
                                return <S.TreinamentoParagraph key={index}>{item.children[0].text}</S.TreinamentoParagraph>
                            }
                        })
                    }
                    {
                        card?.attributes.Quiz && <S.TreinamentoQuizTitle>Quiz</S.TreinamentoQuizTitle>
                    }
                    {
                        card?.attributes.Quiz &&
                        card.attributes.Quiz.map((quiz, quizIndex) => (
                            <React.Fragment key={quizIndex}>
                                <S.TreinamentoQuizNumber>Pergunta {quizIndex + 1}</S.TreinamentoQuizNumber>
                                <S.TreinamentoQuizQuestion>{quiz.questao}</S.TreinamentoQuizQuestion>

                                {/* {quiz.respostas.map((resposta, respostaIndex) => (
                                    <S.TreinamentoQuizAnswer key={respostaIndex}>
                                        {resposta.children[0].text}
                                    </S.TreinamentoQuizAnswer>
                                ))} */}
                            </React.Fragment>
                        ))
                    }


                </ScrollView>
            </S.TreinamentoContainer>
        </SafeAreaView>
    );
}

export default ConteudosTemplate;