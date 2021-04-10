import React from 'react';
import AnswerOption from '../AnswerOption';

export const Question = ({title, answers, correct}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {answers && 
                answers.map(
                    (answer, index) => (
                        <AnswerOption 
                        key={index} 
                        answer={answer}
                        correct={correct} 
                        />
                    )
                )}
            </ul>
        </div>
    );
};

export default Question;
