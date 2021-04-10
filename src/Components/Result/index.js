import React from 'react';
import { useDispatch } from 'react-redux';
import { resetQuiz } from './../../redux/quiz.actions';

const style = {
    green: {
        backgroundColor: 'green',
        color: 'white',
    },
    red: {
        color: 'red',
    },
};

const Result = ({responses}) => {
    const dispatch = useDispatch();
    
    const handleResetQuiz = () => {
        dispatch(
            resetQuiz()
        );
    };

    return (
        <>
            <h1>Your Response list: </h1>
            <ul>
                {
                    responses.map((response, index) => (
                        <li key={index}>
                            <span>{response.answer}</span>
                            
                            <span 
                            style ={response.isCorrect? 
                                style.green : style.red}
                            >
                            {response.isCorrect? 
                            'is Correct Answer': 'opps its not correct.'}
                            </span>
                        </li>
                    ))
                }
            </ul>
            <button 
            type='button'
            onClick={handleResetQuiz}
            >try again</button>
        </>
    );
};

export default Result;
