import React, {useState} from 'react';
import Order from './components/Order';
import Create from './components/Create';
import Header from './components/Header'
import './App.css';

export default function App(props){
    const [order, setOrder] = useState();
    const getToOrder = (el) => {
        setOrder(el)
    }
    return (
        <>
            <Header />
            <main>
                <Create getPizza = {getToOrder}/>
                <Order />
            </main>
        </>
    )
}