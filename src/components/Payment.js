import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { Order } from './Order'
import { ContextConsumer } from '../index'

export default withRouter(Pay);

function Pay(props){
    return (
        <ContextConsumer>
            {
                (context) => {
                    return (
                    <>  
                        <span>Pizza {context.data.size} with </span> 
                        <h2>Thank you for your payment!</h2>
                        <button onClick={()=>props.history.push("/")}>Back</button>
                    </>
                    )
                }
            }

        </ContextConsumer>
    )
}