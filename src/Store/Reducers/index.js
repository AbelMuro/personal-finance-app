import { combineReducers } from 'redux';
import menuReducer from './menuReducer.js';
import transactionsReducer from './transactionsReducer.js';

const rootReducer = combineReducers({
    menu: menuReducer,
    transactions: transactionsReducer
})

export default rootReducer;