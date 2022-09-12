import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../../axios'

export const fetchPosts = createAsyncThunk(
    'fetchPosts',
    async () => {
        const {data} = await api.getPosts();
        return data;
    }
)

const initialState = {
    items: [],
    status: 'loading',
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.items = [];
            state.status = 'loading';
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'loaded';
        },
        [fetchPosts.rejected]: (state) => {
            state.items = [];
            state.status = 'error';
        },
    },
});

export default postsSlice.reducer;