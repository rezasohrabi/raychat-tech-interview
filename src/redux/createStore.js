import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import {createStateSyncMiddleware, initMessageListener} from "redux-state-sync";
import quizReducer, { INITIAL_STATE } from './quiz.reducer';

export const store = createStore(
    quizReducer, 
    INITIAL_STATE, 
    applyMiddleware(createStateSyncMiddleware({}))
);

export const persistor = persistStore(store);
 
initMessageListener(store);
