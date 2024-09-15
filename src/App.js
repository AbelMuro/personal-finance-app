import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Authentication from './Pages/Authentication';
import Profile from './Pages/Profile'
import Overview from './Components/Overview'
import Budget from './Components/Budget';
import './styles.css';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Authentication/>}/>
                <Route path='/profile' element={<Profile/>}>
                    <Route path='/profile/overview' element={<Overview/>}/>
                    <Route path='/profile/budget' element={<Budget/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;