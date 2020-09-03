import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { orderContext } from '../index'

export default withRouter(Order);

function Order(props){
    const context = useContext(orderContext);
    useEffect(()=>{
        let tmp = context.order.reduce((sum, el)=> {
            return sum+el.price
        }, 0)
        context.setTotalCost(tmp);
    },  [context])
    return (
        <div className="orderContainer">
            <h2>Your order</h2>
                <ul>
                {
                    context.order.map((el, index) => {
                        return (
                            <li key={index}>
                                <div className="inlineDiv">
                                    <h4>{(index+1) + ". " + el.size.toUpperCase()} PIZZA</h4>   
                                    <p>{el.ingredients.map(x => " " + x)} ({el.price.toFixed(2)}zł) </p>
                                </div>
                                <button className="close"><i className="fas fa-times" onClick={() => context.del(el)}></i></button>
                            </li>
                        )})
                }
                </ul>
                <div>
                    <h3>Total costs : {context.totalCost.toFixed(2)}zł </h3>
                    <button onClick={()=>props.history.push('/payment')} disabled={ context.totalCost === 0 ? true : false}>Order</button>
                </div>
        </div>
    )
}