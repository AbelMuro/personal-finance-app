import { createAction, createReducer } from '@reduxjs/toolkit'
            
const updateSearch = createAction('UPDATE_SEARCH');
const updateSort = createAction('UPDATE_SORT');
const updateCategory = createAction('UPDATE_CATEGORY');
const updatePage = createAction('UPDATE_PAGE');
const initialState = { search: '', sort: 'Latest', category: 'All Transactions', page: 1};

const menuReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
  builder
    .addCase(updateSearch, (state, action) => {                     
        state.search = action.payload;
    })
    .addCase(updateSort, (state, action) => {                     
        state.sort = action.payload;
    })
    .addCase(updateCategory, (state, action) => {                     
        state.category = action.payload;
    })
    .addCase(updatePage, (state, action) => {                     
        state.page = action.payload;
    })
})

export default menuReducer;