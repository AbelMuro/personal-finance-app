import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Authentication from './Pages/Authentication';
import Profile from './Pages/Profile'
import Overview from './Components/Overview'
import Transactions from './Components/Transactions';
import Budgets from './Components/Budgets';
import Pots from './Components/Pots';
import RecurringBills from './Components/RecurringBills';
import NotFound from './Pages/NotFound'
import { Provider } from 'react-redux';
import Store from './Store'
import './styles.css';
//npm install is-online         to check if the user has internet connection, if they dont, then redirect them to another component

function App() {
    return(
        <Provider store={Store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Authentication/>}/>
                    <Route path='/profile' element={<Profile/>}>
                        <Route path='overview' element={<Overview/>}/>
                        <Route path='budgets' element={<Budgets/>}/>
                        <Route path='transactions' element={<Transactions/>}/>
                        <Route path='pots' element={<Pots/>}/>
                        <Route path='bills' element={<RecurringBills/>}/>
                    </Route>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;