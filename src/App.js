import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Router from "./routes/Router";
import "./styles.scss";

const App = () => {
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    )
}

export default App