import React, {useState, useEffect} from 'react';
import Ingredients from '../ingredients.json'

export default function Create(props){
    const [ingredients, setIngredients] = useState([]);
    const [cost, setCost] = useState(0);
    const [pizza, setPizza] = useState(0);
    useEffect(()=>{
        Ingredients.map(el => el.checked = false);
        setIngredients(Ingredients);
    }, [])
    useEffect(() => {
        let result = pizza;
        ingredients.map(ingredient => {
            if(ingredient.checked === true){
                result += ingredient.price;
            }
        })
        setCost(result);
    }, [ingredients, pizza])
    const ingredientsCheck = (el) => {
        setIngredients(
        ingredients.map(ingredient => {
            if(ingredient.name === el.name){
                ingredient.checked = !ingredient.checked;
            }
            return ingredient;
        }));
    };
    const pizzaInfo = () => {
        let size = "";
        switch(pizza){
            case 11: 
            size = "small";
            break;
            case 14:
            size = "medium";
            break;
            case 17:
            size = "big";
        }
        let ingredientsArr = [];
        ingredients.forEach((el) => {
            if(el.checked === true){
                ingredientsArr.push(el.name);
            }
        })
        if(size != ""){
            props.getPizza({size : size, cost: cost, ingredients : ingredientsArr });
        }
    }
    return (
        <div>
            <h2>Choose your favourite ingredients!</h2>
            <h3> Cost : {cost.toFixed(2)}zł</h3>
            <button onClick={() => pizzaInfo()}>Order</button>
            <div class="pizzaContainer">
                <img className={"pizza small" + (pizza === 11 ? " opacity" : "")} src={process.env.PUBLIC_URL + "assets/pizzaSize.jpg"} alt="small pizza" onClick={() => setPizza(11)}/>
                <span className={ pizza===11 ? "mark" : "displayNone"}>&#10003;</span>
            </div>
            <div class="pizzaContainer">
                <img className={"pizza medium" + (pizza === 14 ? " opacity" : "")} src={process.env.PUBLIC_URL + "assets/pizzaSize.jpg"} alt="medium pizza" onClick={() => setPizza(14)}/>
                <span className={ pizza===14 ? "mark" : "displayNone"}>&#10003;</span>
            </div>
            <div class="pizzaContainer">
                <img className={"pizza big" + (pizza === 17 ? " opacity" : "")} src={process.env.PUBLIC_URL + "assets/pizzaSize.jpg"} alt="big pizza" onClick={() => setPizza(17)}/>
                <span className={ pizza===17 ? "mark" : "displayNone"}>&#10003;</span>
            </div>
            <div className="ingredientContainer">  
            { ingredients.map((el, index)=> {
                return (
                    <div className="ingredient" key={index}>
                        <input type="checkbox" checked={el.checked} onChange={()=> ingredientsCheck(el)}/>
                        <img className="ingredientIcon" src={process.env.PUBLIC_URL+"/assets/"+el.name+".png"} alt={el.name}/>
                        <p>{el.name}</p>
                        <p>{el.price.toFixed(2)}zł</p>
                    </div>
            )})}
            </div>
        </div>
    )
}