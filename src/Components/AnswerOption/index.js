import React from 'react';
import { useDispatch } from 'react-redux';
import { setNextQuestion } from '../../redux/quiz.actions';

const style = {
    cursor: 'pointer',
    border: '1px solid #ddd',
}

const AnswerOption = ({answer, correct}) => {
    const dispatch = useDispatch();

    const handleNextQuestion = answer => {
        const isCorrect = answer === correct? true : false;
        dispatch(
            setNextQuestion({
                answer,
                isCorrect,
            })
        );
    };

    return (
        <li
        onClick={() => handleNextQuestion(answer, correct)}
        style={style}
        >
        {answer}
        </li>
    )
}

export default AnswerOption;
