import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardState {
  id: number;
  type: string;
}

// Estado inicial
const initialState: CardState = {
  id: 0,
  type: "",
};

// Criando o slice
export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    // Definindo o tipo do action payload para que tenha as propriedades 'id' e 'type'
    setCurrentCard(state, action: PayloadAction<CardState>) {
      state.id = action.payload.id;
      state.type = action.payload.type;
    },
  },
});

export const store = configureStore({
  reducer: cardSlice.reducer,
});
