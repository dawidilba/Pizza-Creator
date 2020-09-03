import React from 'react';
import Order from './Order';
import Create from './Create';
import '../App.css';

export default function App(){
    return (
        <>
            <main>
                <Create />
                <Order />
            </main>
            <footer>
                <p>Page created by Dawid Ilba</p>
                <p>Icons author : <a href="http://www.freepik.com">Designed by macrovector / Freepik</a> </p>     
            </footer>
        </>
    )
}