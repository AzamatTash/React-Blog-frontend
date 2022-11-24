import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './slices/posts';
import tagsReducer from './slices/tags';
import authReducer from './slices/auth';
import sortReducer from './slices/sort';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        tags: tagsReducer,
        auth: authReducer,
        sort: sortReducer
    }
});

export default store;