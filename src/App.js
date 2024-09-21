import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Authentication from './Pages/Authentication';
import Profile from './Pages/Profile'
import Overview from './Components/Overview'
import Transactions from './Components/Transactions';
import Budget from './Components/Budget';
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
                        <Route path='/profile/budget' element={<Budget/>}/>
                        <Route path='/profile/transactions' element={<Transactions/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>

    )
}

export default App;