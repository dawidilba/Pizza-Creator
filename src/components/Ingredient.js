import React from 'react';

export default function Ingredient(props){
    return (
        <div className="ingredient">
            <input type="checkbox" checked={props.element.checked} onChange={()=> props.ingredientsCheck(props.element)}/>
            <img className="ingredientIcon" src={process.env.PUBLIC_URL+"/assets/"+props.element.name+".png"} alt={props.element.name}/>
            <p>{props.element.name}</p>
            <p>{props.element.price.toFixed(2)}zł</p>
        </div>
    )
}