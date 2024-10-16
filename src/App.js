import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Authentication from './Pages/Authentication';
import Profile from './Pages/Profile'
import Overview from './Components/Overview'
import Transactions from './Components/Transactions';
import Budgets from './Components/Budgets';
import Pots from './Components/Pots';
import RecurringBills from './Components/RecurringBills';
import { Provider } from 'react-redux';
import Store from './Store'
import './styles.css';

function App() {
    return(
        <Provider store={Store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Authentication/>}/>
                    <Route path='/profile' element={<Profile/>}>
                        <Route path='/profile/overview' element={<Overview/>}/>
                        <Route path='/profile/budgets' element={<Budgets/>}/>
                        <Route path='/profile/transactions' element={<Transactions/>}/>
                        <Route path='/profile/pots' element={<Pots/>}/>
                        <Route path='/profile/bills' element={<RecurringBills/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;