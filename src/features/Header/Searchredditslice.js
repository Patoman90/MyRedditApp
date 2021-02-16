import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: "search",
    initialState: "",
    reducers: {
        changeCurrentSearch: (state, action) => state = action.payload,
    }
});

export const { changeCurrentSearch } = searchSlice.actions;
export default searchSlice.reducer;