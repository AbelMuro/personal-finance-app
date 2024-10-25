import { createAction, createReducer } from '@reduxjs/toolkit'
            
const updateBudgets = createAction('UPDATE_BUDGETS');
const initialState = { budgets: []};

const budgetReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
  builder
    .addCase(updateBudgets, (state, action) => {    
        state.budgets = action.payload;
    })
})

export default budgetReducer;