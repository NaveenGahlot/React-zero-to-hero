import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCountValue = createAsyncThunk("counter/fetchCountValue", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return 10
})

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        loading: false
    },
    reducers: {
        increment: (state) => { 
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCountValue.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchCountValue.fulfilled, (state, action) => {
            state.loading = false
            state.value += action.payload
        })
        builder.addCase(fetchCountValue.rejected, (state) => {
            state.loading = false
        })
    },
})
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer