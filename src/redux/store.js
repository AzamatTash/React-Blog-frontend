import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './slices/posts';
import tagsReducer from './slices/tags';
import authReducer from "./slices/auth";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        tags: tagsReducer,
        auth: authReducer,
    }
});

export default store;