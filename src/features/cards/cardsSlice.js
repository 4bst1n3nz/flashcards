import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard(state, action) {
            state.cards[action.payload.id] = {
                id: action.payload.id,
                front: action.payload.front,
                back: action.payload.back
            };
        }
    }
});

// EXPORT ACTIONS
export const { addCard } = cardsSlice.actions;

// EXPORT SELECTORS
export const selectCards = (state) => state.cards.cards;

// EXPORT REDUCER
export default cardsSlice.reducer;