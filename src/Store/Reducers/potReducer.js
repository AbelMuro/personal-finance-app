import { createAction, createReducer } from '@reduxjs/toolkit'
            
const updateAmount = createAction('UPDATE_AMOUNT');
const initialState = { amount: 0};

const potReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
  builder
    .addCase(updateAmount, (state, action) => {    
        state.amount = action.payload;
    })
})

export default potReducer;