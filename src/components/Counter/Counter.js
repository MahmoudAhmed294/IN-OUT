import React, {Fragment, useContext, useEffect, useState} from 'react';
import {CartContext} from "../cart/CartList";

export const Counter = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const [count, setCount] = useState(0);
    useEffect(()=>{

           setCount(props.num);



            props.handelproductNum(count,props.index)
    },[props.handelproductNum(count,props.index)])
    return (
<Fragment>
    <button className="border-0 bg-light pl-3 pr-3 pb-1 text-danger"
            onClick={() => setCount(count + 1)}><h5 className="mb-0">+</h5></button>
    <span type="text" className="ml-2 mr-2 border-0 text-center"    style={{width: "20px"}}>{count}</span>

    <button className="border-0 bg-light pl-3 pr-3 pb-1 text-danger"
            onClick={()=>setCount(count >= 2 ? count - 1: count)}><h5 className="mb-0">-</h5></button>
</Fragment>

    )
}
