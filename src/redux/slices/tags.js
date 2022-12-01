import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../../axios'

export const fetchTags = createAsyncThunk('fetchTags', async () => {
        const {data} = await api.getTags();
        return data;
});

const initialState = {
    items: [],
    status: 'loading',
};

export const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTags.pending]: (state) => {
            state.items = [];
            state.status = 'loading';
        },
        [fetchTags.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'loaded';
        },
        [fetchTags.rejected]: (state) => {
            state.items = [];
            state.status = 'error';
        },
    },
});

export default tagsSlice.reducer;