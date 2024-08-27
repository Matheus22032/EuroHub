import GoBackContainer from "@/components/GoBackContainer";
import * as S from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ScrollView } from "react-native";
import { TreinamentoItem } from "@/interfaces/interfaces";
import QuizComponent from "@/components/QuizComponent";

const ConteudosTemplate = () => {
    const [card, setCard] = useState<TreinamentoItem>();
    const cardId = useSelector((state: any) => state.id);

    useEffect(() => {
        fetchTreinosData();
    }, [cardId]); 

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

    // useEffect(() => {
    //     if (card) {
    //         card.attributes.Quiz?.map(item => console.log(item))
            
    //     }
    // }, [card]);


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
                            if (item.type === 'heading') {
                                return <S.TreinamentoHeading level={item.level} key={index}>{item.children[0].text}</S.TreinamentoHeading>
                            }
                        })
                    }
                    {
                        card?.attributes.Quiz && <S.TreinamentoQuizTitle>Quiz</S.TreinamentoQuizTitle>
                    }
                    {
                        card?.attributes.Quiz &&
                        card.attributes.Quiz.map((quiz, quizIndex) => (
                            <QuizComponent key={quizIndex} quizIndex={quizIndex} data={quiz} />
                        ))
                    }


                </ScrollView>
            </S.TreinamentoContainer>
        </SafeAreaView>
    );
}

export default ConteudosTemplate;