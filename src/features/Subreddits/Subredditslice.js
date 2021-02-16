import { createSlice } from '@reduxjs/toolkit';

//Create a subreddit slice
const Subredditslice = createSlice({
    //The name
    name: 'subreddits',
    //The starting out state object
    initialState: {
        subReddits: [],
        activeSubreddit: '/r/Home/'
    },
    //reducer methods
    reducers: {
        //Add subreddit
        addToSubs: (state, action) => {
            state.subReddits.push(action.payload);
        },
        //Change subreddits
        changeCurrentSub: (state, action) => {
            state.activeSubreddit = action.payload;
        }
    }
});

export const {addToSubs, changeCurrentSub} = Subredditslice.actions;
export default Subredditslice.reducer;