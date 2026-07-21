import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SelectedCity = {
    city: string;
};

const savedCity = localStorage.getItem("selectedCity");

const initialState: SelectedCity = {
    city: savedCity || "Minsk",
};

export const selectedCitySlice = createSlice({
    name: "selectedCity",
    initialState,
    reducers: {
        setSelectedCity(state, action: PayloadAction<string>) {
            state.city = action.payload;

            localStorage.setItem(
                "selectedCity",
                action.payload
            );
        },
    },
});

export const { setSelectedCity } = selectedCitySlice.actions;

export default selectedCitySlice.reducer;