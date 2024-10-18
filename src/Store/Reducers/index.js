import { combineReducers } from 'redux';
import menuReducer from './menuReducer.js';
import transactionsReducer from './transactionsReducer.js';
import budgetsReducer from './budgetReducers.js';

const rootReducer = combineReducers({
    menu: menuReducer,
    transactions: transactionsReducer,
    budgets: budgetsReducer
})

export default rootReducer;