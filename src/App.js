import React from 'react';
import Order from './components/Order';
import Create from './components/Create';
import './App.css';

export default function App(){
    return (
        <main>
            <Create />
            <Order />
        </main>
    )
}