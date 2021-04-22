import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic(state, action) {
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
        },
        addQuizToTopic(state, action) {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }
    }
});

export const { addTopic, addQuizToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

// SELECTORS
export const selectTopics = (state) => state.topics.topics;