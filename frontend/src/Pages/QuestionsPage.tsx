import { useState } from "react";
import '../styles/QuestionsPage.css';
import { useQuestionsList } from "../hooks/useQuestionsList";
import { ProgressBar } from "../components/ProgressBar";
import { useRank } from "../hooks/useRank";
import { Loading } from "../components/Loading";

const Questions = () => {

    const { value: questionsList, loading: questionsLoading } = useQuestionsList()
    const [{ loading: rankLoading }, rankFn] = useRank()
    const [questionIndex, setQuestionIndex] = useState(0)
    const [rightAnswers, setRightAnswers] = useState(0)
    const [disabledButton, setDisabledButton] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const currentQuestion = questionsList?.[questionIndex]
    const rightAnswer = currentQuestion?.rightAnswer;
    const isRightAnswer = selectedAnswer === rightAnswer
    const questionsLength = questionsList?.length ?? 0
    const isLastQuestion = currentQuestion?.questionNumber === questionsLength

    const nextBtn = () => {

        if (questionsList && questionIndex >= questionsLength - 1) {
            const score = rightAnswers / questionsLength * 100
            rankFn(score)
        }
        setSelectedAnswer('')
        setDisabledButton(false)
        setQuestionIndex(questionIndex + 1)
    }

    return (
        <>
            {questionsLoading || rankLoading ?
                <Loading /> : currentQuestion ?
                    <>
                        <ProgressBar
                            questionNumber={currentQuestion.questionNumber}
                            questionsLength={questionsLength}
                        />
                        <h1>Question {currentQuestion.questionNumber}</h1>
                        <div className="quiz-div">
                            <div className="quiz-answers-div">
                                <div className="question">
                                    {currentQuestion.question}
                                </div>
                                <ul>
                                    {currentQuestion.answers.map(
                                        (answer: string, index: number) => (
                                            <li key={index}>
                                                <button
                                                    className="answers-btns"
                                                    value={answer}
                                                    style={{
                                                        backgroundColor: selectedAnswer === answer ? isRightAnswer ? 'green' : 'red' : 'white',
                                                        color: selectedAnswer === answer ? 'white' : 'black'
                                                    }}
                                                    disabled={disabledButton}
                                                    onClick={(e: any) => {
                                                        setDisabledButton(true)
                                                        setSelectedAnswer(answer)
                                                        if (currentQuestion?.rightAnswer === answer) {
                                                            setRightAnswers(rightAnswers + 1)
                                                        }
                                                    }
                                                    }
                                                >
                                                    {answer}
                                                </button>
                                            </li>
                                        )
                                    )}
                                </ul>
                                {selectedAnswer ?
                                    <div style={{ display: 'flex', justifyContent: 'space-between', height: 50 }}>
                                        <div className="question" style={{ color: isRightAnswer ? 'green' : 'red' }}>
                                            {
                                                isRightAnswer ?
                                                    `${selectedAnswer} is Correct` :
                                                    `${selectedAnswer} is Not Correct`

                                            }
                                        </div>
                                        <button className="next-btn" onClick={nextBtn}>
                                            {isLastQuestion ? "Get Your Rank" : "Next"}
                                        </button>
                                    </div>
                                    :
                                    <></>
                                }

                            </div>
                        </div>

                    </>
                    :
                    <></>
            }

        </>
    );
};
export default Questions;