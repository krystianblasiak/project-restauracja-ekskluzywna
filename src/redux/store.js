import { configureStore } from "@reduxjs/toolkit";
import  reservationReducer  from "./reservationSlice";
import contactReducer from "./contactSlice";

export const store = configureStore({
    reducer: {
        reservations: reservationReducer,
        contact: contactReducer,
    },
});