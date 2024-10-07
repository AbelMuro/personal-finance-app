import { createAction, createReducer } from '@reduxjs/toolkit'
            
const updateSearch = createAction('UPDATE_SEARCH');
const updateSort = createAction('UPDATE_SORT');
const updateCategory = createAction('UPDATE_CATEGORY');
const updatePage = createAction('UPDATE_PAGE');
const updateTransactions = createAction('UPDATE_TRANSACTIONS');
const initialState = {search: '', sort: 'Latest', category: 'All Transactions', page: 1, totalTransactions: [], transactions: []};

const sortTransactions = (transactions, state) => {
    transactions = transactions.filter((transaction) => {
        const recipient = transaction.recipient.toLowerCase();
        const query = state.search.toLowerCase();
        return recipient.includes(query);
    });

    if(state.category !== 'All Transactions')
        transactions = transactions.filter((transaction) => {
            const category = transaction.category;
            return category === state.category
        });

    transactions.sort((a, b) => {
        if(state.sort === 'Latest')
            return a.order < b.order ? 1 : -1;
        else if(state.sort === 'Oldest')
            return a.order > b.order ? 1 : -1;
        else if(state.sort === 'A to Z')
            return a.recipient[0] > b.recipient[0] ? 1 : -1;
        else if(state.sort === 'Z to A')
            return a.recipient[0] < b.recipient[0] ? 1 : -1;
        else if(state.sort === 'Highest')
            return a.amount < b.amount ? 1 : -1;
        else 
            return a.amount > b.amount ? 1 : -1;  
    });

    return transactions
}

const menuReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
  builder
    .addCase(updateSearch, (state, action) => {    
        state.search = action.payload;
        let filteredTransactions = [...state.totalTransactions];
        filteredTransactions = sortTransactions(filteredTransactions, state);
        state.transactions = filteredTransactions;
        
    })
    .addCase(updateSort, (state, action) => {     
        state.sort = action.payload;
        let sortedTransactions = [...state.totalTransactions];
        sortedTransactions = sortTransactions(sortedTransactions, state);      
        state.transactions = sortedTransactions;          
        
    })
    .addCase(updateCategory, (state, action) => {     
        state.category = action.payload;
        let filteredTransactions = [...state.totalTransactions];                
        filteredTransactions = sortTransactions(filteredTransactions, state);
        state.transactions = filteredTransactions;
    })
    .addCase(updatePage, (state, action) => {                     
        state.page = action.payload;
    })
    .addCase(updateTransactions, (state, action) => {
        let newTransactions = action.payload;
        state.totalTransactions = [...newTransactions];
        newTransactions = sortTransactions(newTransactions, state);
        state.transactions = newTransactions;
    })
})

export default menuReducer;