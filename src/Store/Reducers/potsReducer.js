import { createAction, createReducer } from '@reduxjs/toolkit'
            
const updatePots = createAction('UPDATE_POTS');
const initialState = { pots: []};

const potsReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
  builder
    .addCase(updatePots, (state, action) => {    
        state.pots = action.payload;
    })
})

export default potsReducer;