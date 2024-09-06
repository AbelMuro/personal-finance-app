import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Authentication from './Pages/Authentication';
import './styles.css';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Authentication/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;