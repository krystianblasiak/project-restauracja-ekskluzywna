import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const sendEmail = createAsyncThunk(
    "kontakt/sendEmail",
    async (formData, { rejectWithValue }) => {
        const response = await fetch("http://localhost:5000/api/send-email", {
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

const contactSlice = createSlice({
    name: "contact",
    initialState: { loading: false, success: false, error: null},
    reducers: {
        resetStatus: (state) => {
            state.success = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendEmail.pending, (state) => { state.loading = true })
            .addCase(sendEmail.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(sendEmail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { resetStatus } = contactSlice.actions;
export default contactSlice.reducer;