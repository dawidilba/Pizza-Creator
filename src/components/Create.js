import React, {useState, useEffect} from 'react';
import Ingredients from '../ingredients.json';
import PizzaContainer from './PizzaContainer';
import { ContextConsumer } from '../index'

export default function Create(props){
    const [ingredients, setIngredients] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    useEffect(()=>{
        Ingredients.map(el => el.checked = false);
        setIngredients(Ingredients);
    }, [])
    useEffect(() => {
        let result = price;
        ingredients.map(ingredient => {
            if(ingredient.checked === true){
                result += ingredient.price;
            }
        })
        setTotalPrice(result);
    }, [ingredients, price])
    const ingredientsCheck = (el) => {
        setIngredients(
        ingredients.map(ingredient => {
            if(ingredient.name === el.name){
                ingredient.checked = !ingredient.checked;
            }
            return ingredient;
        }));
    };
    const pizzaInfo = (ctx) => {
        let size = "";
        switch(price){
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
            props.getPizza({size : size, cost: totalPrice, ingredients : ingredientsArr });
            ctx.update({size : size, cost: totalPrice, ingredients : ingredientsArr });
        }
        setIngredients(
            ingredients.map(ingredient => {
                ingredient.checked = false;
                return ingredient;
            }));
        setPrice(0);
    }
    const pizzaClick = (el) => setPrice(parseInt(el));
    return (
        <div className="createContainer">
            <h2>Choose your favourite ingredients!</h2>
            <div>
                <PizzaContainer size="small" price="11" pizza={price} setPrice={pizzaClick}/>
                <PizzaContainer size="medium" price="14" pizza={price} setPrice={pizzaClick}/>
                <PizzaContainer size="big" price="17" pizza={price} setPrice={pizzaClick}/>
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
            <div>
                <h3> Cost : {totalPrice.toFixed(2)}zł</h3>
                <ContextConsumer>
                    {
                        (context) => {
                            return (
                                <button onClick={() => pizzaInfo(context)}>Add to order</button>
                            )
                        }
                    }
                </ContextConsumer>

            </div>
        </div>
    )
}