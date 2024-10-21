import { createAction, createReducer } from '@reduxjs/toolkit'
            
const changeMenu = createAction('CHANGE_MENU');
const changeLink = createAction('CHANGE_LINK');
const initialState = { minimize: false, link: 'overview' }

const menuReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
  builder
    .addCase(changeMenu, (state, action) => {                            //the 'case'
      state.minimize = action.payload;
    })
    .addCase(changeLink, (state, action) => {
      state.link = action.payload;
    })  

})

export default menuReducer;