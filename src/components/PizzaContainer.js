import React from 'react';

export default function PizzaContainer(props){
    return (
        <div className="pizzaContainer">
            <img className={"pizza " + props.size + (props.pizza == props.price ? " opacity" : "")} src={process.env.PUBLIC_URL + "assets/pizzaSize.jpg"} alt={props.size + " pizza"} onClick={()=> props.setPrice(props.price)} />
            <span className={ props.pizza == props.price ? "mark" : "displayNone"}>&#10003;</span> 
        </div>
    )
}
