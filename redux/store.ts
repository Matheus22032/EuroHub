import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState : TreinamentoItem = {
    id: 0,
    attributes: {
        ContentTitle: 'Teste',
        ContentDescription: 'Teste',
        Content: []
    },
};

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setCurrentCard(state, action: PayloadAction<TreinamentoItem>) {
            state.id = action.payload.id;
            state.attributes = action.payload.attributes;
        }, 
    },
})

export const store = configureStore({
    reducer: cardSlice.reducer,
})
