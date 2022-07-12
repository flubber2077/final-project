import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
    name: "song",
    initialState: {},
    reducers: {
        changeSong: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeSong } = songSlice.actions;


export default songSlice.reducer;