import React from 'react';
import { useSelector } from 'react-redux';
import Question from '../Question';
import Result from '../Result';

const mapState = (state) => ({
    questions: state.questions,
    currentIndex: state.currentIndex,
    completed: state.completed,
    responses: state.responses,
});

const Quiz = () => {
    const { questions, currentIndex, completed, responses } = useSelector(mapState);

    const question = questions[currentIndex];
    return (
        <section>
            <a href='#'>this link is for new tab sync test</a>
            {completed && <Result responses={responses} />}
            {!completed && <Question {...question} />}
        </section>
    )
}

export default Quiz;
