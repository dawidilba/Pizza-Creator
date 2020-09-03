import React, {useState, createContext} from 'react';
import ReactDOM from 'react-dom'
import {Route, HashRouter as BrowserRouter} from 'react-router-dom'
import App from './components/App'
import Payment from './components/Payment'
import Header from './components/Header'

export const orderContext = createContext();
const ContextProvider = orderContext.Provider;

function Routing(){
    const [order, setOrder] = useState([]);
    const [totalCost, setTotalCost] = useState(0)
    const update = el => setOrder([...order, el].filter(el => el !== undefined));
    const del = pizza => setOrder(order.filter(el => el !== pizza));
    const clear = () => setOrder([]);

    return (
        <BrowserRouter>
            <Header />
            <ContextProvider value= {{order, totalCost, update, del, clear, setTotalCost}}>
                <Route exact path = "/" component={App} />
                <Route exact path = "/payment" component={Payment} />
            </ContextProvider>
        </BrowserRouter>
    )
}
ReactDOM.render(<Routing />, document.querySelector("body"));

