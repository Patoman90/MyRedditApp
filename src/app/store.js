import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';

export default configureStore({
  reducer: {
    //Reducer used to update state.posts
    posts: postsReducer,
  },
});
