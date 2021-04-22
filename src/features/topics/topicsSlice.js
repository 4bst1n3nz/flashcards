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
            };
        }
    }
});

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

// SELECTORS
export const selectTopics = (state) => state.topics.topics;