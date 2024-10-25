import { createAction, createReducer } from '@reduxjs/toolkit'
            
const updateSearch = createAction('UPDATE_SEARCH_BILLS');
const updateSort = createAction('UPDATE_SORT_BILLS');
const updateBills = createAction('UPDATE_BILLS');
const initialState = {search: '', sort: 'Latest', totalBills: [], bills: []};

const sortBills = (bills, state) => {
    bills = bills.filter((bill) => {
        const title = bill.title.toLowerCase();
        const query = state.search.toLowerCase();
        return title.startsWith(query);
    });

    bills.sort((a, b) => {
        if(state.sort === 'Latest')
            return a.order < b.order ? 1 : -1;
        else if(state.sort === 'Oldest')
            return a.order > b.order ? 1 : -1;
        else if(state.sort === 'A to Z')
            return a.title[0] > b.title[0] ? 1 : -1;
        else if(state.sort === 'Z to A')
            return a.title[0] < b.title[0] ? 1 : -1;
        else if(state.sort === 'Highest')
            return a.amountDue < b.amountDue ? 1 : -1;
        else 
            return a.amountDue > b.amountDue ? 1 : -1;  
    });

    return bills
}

const billsReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
  builder
    .addCase(updateSearch, (state, action) => {    
        state.search = action.payload;
        let filteredBills = [...state.totalBills];
        filteredBills = sortBills(filteredBills, state);
        state.bills = filteredBills;
        
    })
    .addCase(updateSort, (state, action) => {     
        state.sort = action.payload;
        let sortedBills = [...state.totalBills];
        sortedBills = sortBills(sortedBills, state);      
        state.bills = sortedBills;          
        
    })
    .addCase(updateBills, (state, action) => {
        let newBills = action.payload;
        state.totalBills = [...newBills];
        newBills = sortBills(newBills, state);
        state.bills = newBills;
    })
})

export default billsReducer;