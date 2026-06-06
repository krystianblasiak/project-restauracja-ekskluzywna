import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import initialState from "./initialState";
import shortid from "shortid";

export const sendReservation = createAsyncThunk(
    "rezerwacja/sendReservation",
    async (formData, { rejectWithValue }) => {
        const response = await fetch("http://localhost:5000/api/send-reservation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if(!response.ok){
            const error = await response.json();
            return rejectWithValue(error.message);
        }

        return await response.json();
    }
);

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

        resetStatus: (state) => {
            state.success = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendReservation.pending, (state) => { state.loading = true })
            .addCase(sendReservation.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(sendReservation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const {
    setSelectedDate,
    addReservation,
    resetStatus,
} = reservationSlice.actions;

export default reservationSlice.reducer;