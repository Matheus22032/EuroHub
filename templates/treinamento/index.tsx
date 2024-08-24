import Container from "@/components/Container";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import GoBackContainer from "@/components/GoBackContainer";
import ContentCard from "@/components/ContentCard";
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

const TreinamentoTemplate = () => {
    const [cards, setCards] = useState<TreinamentoItem[]>([]);

    useEffect(() => {
        fetchTreinosData();
    }, [])

    const headers = {
        "Content-Type": "application/json",
    };

    const url = 'http://192.168.0.189:1337/api/treinos';
    

    const fetchTreinosData = async () => {
        try {
            const response = await axios.get(url, { headers });
            const data: TreinamentoItem[] = response.data.data;
            setCards(data);        
        }
        catch (error) {
            console.log('error fetching data', error);
        }
    }

    return (
        <SafeAreaView>
            <Container type="default">
                <S.TreinamentoContainer>
                    <S.TreinamentoHeaderContent>
                        <GoBackContainer />
                        <S.TreinamentoTitle>
                            Seus Treinamentoss
                        </S.TreinamentoTitle>
                    </S.TreinamentoHeaderContent>
                    <ScrollView>
                        <S.TreinamentosContent>
                            {cards.map((card) => (
                                <ContentCard key={card.id} title={card.attributes.ContentTitle} subtitle={card.attributes.ContentDescription} linkDirection={"/treinamento/treinamento"}/>
                            ))}
                            {/* <ContentCard title={"Treinamento 1"} subtitle={"Descrição do Treinamento 1"} linkDirection={"/treinamento/treinamento"} /> */}
                        </S.TreinamentosContent>
                    </ScrollView>
                </S.TreinamentoContainer>

            </Container>
        </SafeAreaView>

    )
}

export default TreinamentoTemplate;