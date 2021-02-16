import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../features/Header/Searchredditslice';
import postsSlice from '../features/posts/postsSlice';
import Subredditslice from '../features/Subreddits/Subredditslice';
import SinglePostSlice from '../features/posts/singlePostSlice';

export default configureStore({
  reducer: {
    search: searchSlice,
    posts: postsSlice,
    subreddits: Subredditslice,
    singlePostId: SinglePostSlice
  },
});
