import React, {useState} from 'react';
import Order from './components/Order';
import Create from './components/Create';
import './App.css';

export default function App(props){
    const [order, setOrder] = useState();
    const getPizza = (el) => setOrder(el);
    return (
        <>
            <main>
                <Create getPizza = {getPizza}/>
                <Order myOrder = {order}/>
            </main>
        </>
    )
}