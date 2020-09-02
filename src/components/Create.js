import React, {useState, useEffect, useContext} from 'react';
import Ingredients from '../ingredients.json';
import PizzaContainer from './PizzaContainer';
import Ingredient from './Ingredient'
import { orderContext } from '../index'

export default function Create(props){
    const [ingredients, setIngredients] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const context = useContext(orderContext)
    useEffect(()=>{
        Ingredients.map(el => el.checked = false);
        setIngredients(Ingredients);
    }, [])
    useEffect(() => {
        let result = price;
        ingredients.forEach(ingredient => {
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
    const pizzaInfo = () => {
        let size;
        switch(price){
            case 11: 
            size = "small";
            break;
            case 14:
            size = "medium";
            break;
            case 17:
            size = "big";
            break;
            default:
            size = "";
        }
        let ingredientsArr = [];
        ingredients.forEach((el) => {
            if(el.checked === true){
                ingredientsArr.push(el.name);
            }
        })
        if(size !== ""){
            context.update({size, price: totalPrice, ingredients : ingredientsArr });
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
            { 
                ingredients.map((el, index)=> {
                    return ( 
                        <Ingredient element={el} ingredientsCheck={ingredientsCheck}/>
                        )})
            }
            </div>
            <div>
                <h3> Cost : {totalPrice.toFixed(2)}zł</h3>
                <button onClick={() => pizzaInfo()}>Add to order</button>
            </div>
        </div>
    )
}