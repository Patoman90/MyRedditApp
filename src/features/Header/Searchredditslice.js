import { createSlice } from '@reduxjs/toolkit';


//searchSlice created with createSlice method
export const searchSlice = createSlice({
    //state
    name: "search",
    initialState: "",
    //reducer function
    reducers: {
        //action that calls the reducer
        changeCurrentSearch: (state, action) => state = action.payload,
    }
});

export const { changeCurrentSearch } = searchSlice.actions;
//I export the destructured reducer object so that changeCurrentSearch can be used.
export default searchSlice.reducer;
//I export the searchSlice so it can be imported into the redux store