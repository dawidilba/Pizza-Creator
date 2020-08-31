import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import Pay from './components/Payment'
import Header from './components/Header'
import {Route, BrowserRouter} from 'react-router-dom'

function Routing(){
    return (
        <BrowserRouter>
            <Header />
            <Route exact path = "/" component={App} />
            <Route exact path = "/payment" component={Pay} />
        </BrowserRouter>
    )
}
ReactDOM.render(<Routing />, document.querySelector("body"));

