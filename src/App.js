import React from 'react';
import Order from './components/Order';
import Create from './components/Create';
import Header from './components/Header'
import './App.css';

export default function App(props){
    return (
        <>
            <Header />
            <main>
                <Create />
                <Order />
            </main>
        </>
    )
}