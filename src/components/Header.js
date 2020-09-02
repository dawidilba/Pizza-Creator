import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(Header)

function Header(props){
    return (
        <header>
        <div className="header-img">
            <div className="hero-img"></div>
            <div className="hero-text"><h1>Create Pizza!</h1></div>
        </div>
    </header>
    )
}