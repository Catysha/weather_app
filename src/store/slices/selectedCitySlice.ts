import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SelectedCity = {
    city: string;
};

const initialState: SelectedCity = {
    city: "Minsk",
};

export const selectedCitySlice = createSlice({
    name: "selectedCity",
    initialState,
    reducers: {
        setSelectedCity(state, action: PayloadAction<string>) {
            state.city = action.payload;
        },
    },
});

export default selectedCitySlice.reducer;