import React, {useContext} from 'react';
import { withRouter } from 'react-router-dom';
import { orderContext } from '../index'
import '../App.css'

export default withRouter(Pay);

function Pay(props){
    const context = useContext(orderContext);
    const back = () => {
        context.clear();
        props.history.push("/");
    }
    return (
        <div className="paymentContainer">
            <h2>Your order : </h2>
            <ol>
            {
                context.order.map((el, index) => {
                    return (
                        <li key={index}>
                            <p>{el.size.toUpperCase()} PIZZA : {el.ingredients.map(x => " " + x)} ({el.price.toFixed(2)}zł)</p>
                        </li>
                    )
                })
            }
            </ol>  
            <h3>Total payment cost : {context.totalCost.toFixed(2)}zł</h3>
            <p>Thank you for your payment! Your pizza will be ready soon!</p>
            <button onClick={back}>Back</button>
        </div>
    )
}