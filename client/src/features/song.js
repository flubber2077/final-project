import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
    name: "song",
    initialState: { value: { name: "null?", duration: 0 } },
    reducers: {
        changeSong: (state, action) => {
            state.value = action.payload;
        }
    }
})


export default songSlice.reducer;