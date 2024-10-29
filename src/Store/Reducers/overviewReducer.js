import { createAction, createReducer } from '@reduxjs/toolkit'
            
const updateData = createAction('UPDATE_DATA');
const initialState = { data: {budgets: [], pots: [], transactions: []}};

const overviewReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
  builder
    .addCase(updateData, (state, action) => {    
        state.data.budgets = action.payload.budgets || [];
        state.data.pots = action.payload.pots || [];
        state.data.transactions = action.payload.transactions || [];
        state.data.bills = action.payload.bills || [];
        state.data.income = action.payload.income || 0;
    })
})

export default overviewReducer;