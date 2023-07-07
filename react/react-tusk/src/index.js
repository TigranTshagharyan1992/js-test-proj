import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './app';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App /> }>
            </Route>
        </Routes>
    </BrowserRouter>
</React.StrictMode>,);
