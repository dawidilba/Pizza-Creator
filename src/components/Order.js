import React, {useState, useEffect} from 'react';

export default function Order(props){
    const [order, setOrder] = useState([]);
    const [cost, setCost] = useState(0);

    useEffect(() => {
        if(props.myOrder){
            setOrder([...order, props.myOrder]);
        }
    }, [props.myOrder]);
    useEffect(()=>{
        let tmp = order.reduce((sum, el)=> {
            return sum+el.cost
        }, 0)
        setCost(tmp);
    },  [order])
    const delateOrder = pizza => {
        setOrder(order.filter(el => pizza !== el)) 
    }
    return (
        <div>
            <h2>Your order</h2>
            <div>
                {
                    order.map((el, index) => {
                        return (
                            <div key={index}>
                                <span>Pizza {el.size} with ({el.ingredients.map(x => " " + x)} ) - price: {el.cost.toFixed(2)}zł  </span>
                                <i className="fas fa-times" onClick={() => delateOrder(el)}></i>
                            </div>
                        )
                    })
                }
                &nbsp;
                <p>Total costs : {cost.toFixed(2)}zł</p>
            </div>
        </div>
    )
}