import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../features/Header/Searchredditslice';
import postsSlice from '../features/posts/postsSlice';
import Subredditslice from '../features/Subreddits/Subredditslice';
import SinglePostSlice from '../features/posts/singlePostSlice';
//I import over my slices to be used by the redux store.
export default configureStore({
  //Configure store object that holds the reducer object
  reducer: {
    search: searchSlice,
    posts: postsSlice,
    subreddits: Subredditslice,
    singlePostId: SinglePostSlice
  },
});
