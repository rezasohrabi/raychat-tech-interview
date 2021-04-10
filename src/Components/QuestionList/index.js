import React, { useEffect, useState } from 'react';
import Result from './../Result';

const questionsInitial = [
    {
        id: '111',
        title:
            "how are you?",
        answers: ["im fine", "thanks", "thank you", "good"],
        correct: "good",
    },
    {
        id: '222',
        title:
            "how are?",
        answers: ["im fine", "gggg", "you", "helllo"],
        correct: "thanks",
    },
    {
        id: '333',
        title:
            "how?",
        answers: ["im fine", "thanks", "thank you", "good"],
        correct: "thank you",
    },
    {
        id: '444',
        title:
            "is it a?",
        answers: ["im fine", "no", "do", "good"],
        correct: "im fine",
    },
  ];

const QuestionList = props => {
    const [questions, setQuestions] = useState(questionsInitial);
    const [responses, setResponses] = useState([]);
    const [current, setCurrent] = useState(0);
    const [completed, setCompleted] = useState(false);
    useEffect(() => {

    }, [])

    const nextQuestion = (answer) => {
        console.log(responses, completed, current)
        if(current === questions.length -1) {
            setCompleted(true);
        }else {
            setCurrent(current + 1);
            setResponses([...responses, answer]);
        }
    }

    if (!questions) return null;

    const question = questions[current];
    const {title, answers} = question;
    return (
        <section>
            {completed? (
                <Result responses={responses}/>
            ): [
                <h1 key={0}>{title}</h1>,
                answers.map((answer, index) => (
                    <div 
                    key={index}
                    onClick={() => nextQuestion(answer)}
                    >
                        {answer}
                    </div>
                ))
            ]}
        </section>
    )
}

export default QuestionList;