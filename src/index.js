import React, {useState, createContext} from 'react';
import ReactDOM from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import App from './App'
import Payment from './components/Payment'
import Header from './components/Header'

const context = createContext();
const ContextProvider = context.Provider;
export const ContextConsumer = context.Consumer;

function Routing(){
    const [cost, setCost] = useState(0);
    const [data, setData] = useState([]);
    const update = el => {
        setData([...data, el]);
    }
    return (
        <BrowserRouter>
            <Header />
            <ContextProvider value= {{data, update}}>
                <Route exact path = "/" component={App} />
                <Route exact path = "/payment" component={Payment} />
            </ContextProvider>
        </BrowserRouter>
    )
}
ReactDOM.render(<Routing />, document.querySelector("body"));

