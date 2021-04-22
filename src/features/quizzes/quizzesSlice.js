import { createSlice } from "@reduxjs/toolkit";

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
            }
        }
    }
});

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

// SELECTORS
export const selectQuizzes = (state) => state.quizzes.quizzes;