import { useState } from "react";
import questions from '../../Common/questions.json';
import Container from "../../Ui/Container/Container";
import Content from "../../Ui/Content/Content";
import ButtonBack from "../../Ui/Button/ButtonBack";
import Button from "../../Ui/Button/Button";

import style from './Quiz.module.scss';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <main>
      <Container>
        <Content title='Language Quiz'>
          <ButtonBack />

          {showScore ? (
            <div className={style.result}>
              <h3 className={style.result__score}>Your Score: {score} / {questions.length}</h3>
              <Button onClick={handleResetQuiz}>Reset</Button>
            </div>
          ) : (
            <div className={style.questions}>
              <p className={style.questions__current}>Question {currentQuestion + 1}/{questions.length}</p>
              <p className={style.questions__question}>{questions[currentQuestion].question}</p>
              <div className={style.questions__options}>
                {questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    className={style.questions__options_item}>
                    {option}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Content>
      </Container>

    </main>
  );

}
