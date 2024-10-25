import { combineReducers } from 'redux';
import menuReducer from './menuReducer.js';
import transactionsReducer from './transactionsReducer.js';
import budgetsReducer from './budgetReducers.js';
import billsReducer from './billsReducer.js';
import overviewReducer from './overviewReducer.js';
import potsReducer from './potsReducer.js'

const rootReducer = combineReducers({
    menu: menuReducer,
    transactions: transactionsReducer,
    budgets: budgetsReducer,
    bills: billsReducer,
    overview: overviewReducer,
    pots: potsReducer,
})

export default rootReducer;