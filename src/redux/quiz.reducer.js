import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import quizTypes from "./quiz.types";
import { getIsQuizComplete } from './quiz.utils';

export const INITIAL_STATE = {
    completed: false,
    currentIndex: 0,
    responses: [],
    questions: [
        {
            id: '111',
            title: "how are you?",
            answers: ["im fine", "thanks", "thank you", "good"],
            correct: "good",
        },
        {
            id: '222',
            title: "how are?",
            answers: ["im fine", "gggg", "you", "helllo"],
            correct: "thanks",
        },
        {
            id: '333',
            title: "how?",
            answers: ["im fine", "thanks", "thank you", "good"],
            correct: "thank you",
        },
        {
            id: '444',
            title: "is it a?",
            answers: ["im fine", "no", "do", "good"],
            correct: "im fine",
        },
    ]
}

const quizReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case quizTypes.SET_NEXT_QUESTION: 
            return {
                ...state,
                responses: [
                    ...state.responses,
                    action.payload,
                ],
                currentIndex: state.currentIndex + 1,
                completed: getIsQuizComplete({prevState: state})
            }
        case quizTypes.RESET_QUIZ: 
            return {
                ...state,
                ...INITIAL_STATE,
            }
        default:
            return state;
    }
}

const configStorage = {
    key: 'root',
    storage,
}

export default persistReducer(configStorage, quizReducer);
