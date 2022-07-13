import { createSlice } from '@reduxjs/toolkit';

export const currentIDSlice = createSlice({
    name: "currentID",
    initialState: 0,
    reducers: {
        changeSong: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeCurrentID } = currentIDSlice.actions;


export default currentIDSlice.reducer;