import * as S from "./styles";
import React, { useEffect, useState } from "react";
import { QuizComponentProps } from "./props";

const QuizComponent = ({ data, quizIndex, isFinished }: QuizComponentProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const correctAnswer = data.NumeroResposta;

  return (
    <React.Fragment>
      <S.TreinamentoQuizNumber>
        Pergunta {quizIndex + 1}
      </S.TreinamentoQuizNumber>
      <S.TreinamentoQuizQuestion>{data.Questao}</S.TreinamentoQuizQuestion>
      <S.QuizContainer>
        {data.Respostas.map((resposta, index) => {
          if (resposta.children[0].text === "") return;
          return (
            <S.AnswerContainer
              key={index}
              onPress={() => {
                isFinished(quizIndex, index === correctAnswer);
                setSelectedAnswer(index);
              }}
            >
              <S.AnswerButton
                $isActive={selectedAnswer === index}
                $isWrong={index != correctAnswer}
              />
              <S.AnswerText
                $isActive={selectedAnswer === index}
                $isWrong={index != correctAnswer}
              >
                {resposta.children[0].text}
              </S.AnswerText>
            </S.AnswerContainer>
          );
        })}
      </S.QuizContainer>
    </React.Fragment>
  );
};

export default QuizComponent;
