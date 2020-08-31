import React, {useState} from 'react';
import Order from './components/Order';
import Create from './components/Create';

import './App.css';

export default function App(props){
    const [order, setOrder] = useState();
    const getOrder = (el) => {
        setOrder(el)
    }
    return (
        <>
            <main>
                <Create getPizza = {getOrder}/>
                <Order myOrder = {order}/>
            </main>
        </>
    )
}