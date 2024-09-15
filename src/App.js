import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Authentication from './Pages/Authentication';
import Profile from './Pages/Profile'
import Overview from './Components/Overview';
import './styles.css';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Authentication/>}/>
                <Route path='/profile' element={<Profile/>}>
                    <Route path='/profile/overview' element={<Overview/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;