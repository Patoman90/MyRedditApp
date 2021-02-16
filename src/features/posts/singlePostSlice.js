import {createSlice} from '@reduxjs/toolkit';

const SinglePostSlice = createSlice({
    name: "singlePostId",
    initialState: "",
    reducers: {
        changeActivePostId: (state, action) => state = action.payload 
    }
});

export default SinglePostSlice.reducer;
export const {changeActivePostId} = SinglePostSlice.actions;