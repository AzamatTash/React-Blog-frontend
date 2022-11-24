import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    sort: {
        sortType: '',
        description: 'По уполчанию'
    },
    filter: ''
};

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    },
});

export const {setSort, setFilter} = sortSlice.actions;
export default sortSlice.reducer;