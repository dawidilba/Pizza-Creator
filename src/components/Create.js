import React, {useState, useEffect} from 'react';
import Ingredients from '../ingredients.json'

export default function Create(props){
    const [ingredients, setIngredients] = useState([]);
    useEffect(()=>{
        setIngredients(Ingredients);
    }, [])
    return (
        <div>
            <h2>Choose your favourite ingredients!</h2>
            <div class="pizzaContainer">
                <img class="pizza small"src={process.env.PUBLIC_URL + "assets/pizzaSize.jpg"} alt="small pizza"/>
                <span class="mark">&#10003;</span>
            </div>
            <div class="pizzaContainer">
                <img class="pizza medium"src={process.env.PUBLIC_URL + "assets/pizzaSize.jpg"} alt="medium pizza"/>
                <span class="mark">&#10003;</span>
            </div>
            <div class="pizzaContainer">
                <img class="pizza big"src={process.env.PUBLIC_URL + "assets/pizzaSize.jpg"} alt="big pizza"/>
                <span class="mark">&#10003;</span>
            </div>
            <div className="ingredientContainer">  
            { Ingredients.map((el, index)=> {
                return (
                    <div className="ingredient" key={index}>
                        <input type="checkbox"></input>
                        <img className="ingredientIcon" src={process.env.PUBLIC_URL+"/assets/"+el.name+".png"} alt={el.name}/>
                        <p>{el.name}</p>
                        <p>{el.price.toFixed(2)}zł</p>
                    </div>
            )})}
            </div>
        </div>
    )
}