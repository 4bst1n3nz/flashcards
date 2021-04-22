import { createSlice } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz(state, action) {
            state.quizzes[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: []
            };
        }
    }
});


// THUNKS
export const addQuizThunk = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizToTopic(payload));
    };
};

// EXPORT ACTIONS
export const { addQuiz } = quizzesSlice.actions;

// EXPORT SELECTORS
export const selectQuizzes = (state) => state.quizzes.quizzes;

// EXPORT REDUCER
export default quizzesSlice.reducer;