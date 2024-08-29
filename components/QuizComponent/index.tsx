import * as S from "./styles";
import React, { useState } from "react";
import { QuizComponentProps } from "./props";

const QuizComponent = ({ data, quizIndex }: QuizComponentProps) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    // const correctAnswer = data.NumeroResposta;
  return (
    <React.Fragment>
      <S.TreinamentoQuizNumber>
        Pergunta {quizIndex + 1}
      </S.TreinamentoQuizNumber>
      <S.TreinamentoQuizQuestion>{data.Questao}</S.TreinamentoQuizQuestion>
      <S.QuizContainer>
        {data.Respostas.map((resposta, index) => {
            if(resposta.children[0].text === '') return;
          return (
            <S.AnswerContainer key={index} onPress={() => setSelectedAnswer(index)}>
              <S.AnswerButton $isActive={selectedAnswer === index}/>
              <S.AnswerText>{resposta.children[0].text}</S.AnswerText>
            </S.AnswerContainer>
          );
        })}
      </S.QuizContainer>
    </React.Fragment>
  );
};


export default QuizComponent;
