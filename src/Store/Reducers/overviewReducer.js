import { createAction, createReducer } from '@reduxjs/toolkit'
            
const updateData = createAction('UPDATE_DATA');
const initialState = { data: []};

const menuReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
  builder
    .addCase(updateData, (state, action) => {    
        state.data = action.payload;
    })
})

export default menuReducer;