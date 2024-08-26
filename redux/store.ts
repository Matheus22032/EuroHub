import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    id: 0,
};

export const cardSlice = createSlice({
    name: 'cardId',
    initialState,
    reducers: {
        setCurrentCard(state, action) {
            state.id = action.payload;
        }, 
    },
})

export const store = configureStore({
    reducer: cardSlice.reducer,
})
