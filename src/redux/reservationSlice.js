import { createSlice } from "@reduxjs/toolkit"
import initialState from "./initialState";
import shortid from "shortid";



const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        setSelectedDate: (state, action) => {
            state.selectedDate = action.payload;
        },

        addReservation: (state, action) => {
            state.reservations.unshift({
                id: shortid(),
                ...action.payload,
                createdAt: new Date().toISOString(),
            });
        },
    }
});

export const {
    setSelectedDate,
    addReservation,
} = reservationSlice.actions;

export default reservationSlice.reducer;