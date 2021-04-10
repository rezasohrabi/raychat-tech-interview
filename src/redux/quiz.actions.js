import quizTypes  from './quiz.types';

export const setNextQuestion = (answer) => ({
    type: quizTypes.SET_NEXT_QUESTION,
    payload: answer,
});

export const resetQuiz = () => ({
    type: quizTypes.RESET_QUIZ,
});
