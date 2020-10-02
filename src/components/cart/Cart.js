import React, {useContext, useEffect, useState} from 'react';
import {CartContext} from './CartList';
import {InpLogin} from "../Login/Login_Style";
import {Counter} from "../Counter/Counter";

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [cartState, setCartstate] = useState({nocart: '', totalPrice: '', cartItem: '', number: '', counter: ''});
    const [ShowCart, setCartItem] = useState(0);

    let res = []
                let arritem = [];
    let totalPrice = 1;

    useEffect(() => {
    const handelproductNum = (count,index) => {
        handelTotalPrice(count,index)

    }

        // const totalPrice = cart.reduce((acc, curr) => acc + (curr.price* curr.num), 0);
        const totalitem = cart.reduce((acc, curr) => acc + curr[0], 0)
        const cartItem = cart.map((i, index) => {
            return (
                <div className="card mb-3 ml-0 container col-10 " key={index}>
                    {cartState.nocart}
                    <div className="row p-3">
                        <div className="col-md-4 p-3 bg-light rounded-lg ml-2 ">
                            <img src={i.img} className="card-img h-100" alt="..."/>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">{i.name}</h5>
                                <p className="card-text mb-2">{i.details}</p>

                                <div className="row align-items-center position-absolute "
                                     style={{bottom: "0", right: "20px"}}>
                                    <Counter handelproductNum={handelproductNum} index={index} num={i.num}/>
                                    <span className="mr-3 ml-3"><h5 className="d-inline">{i.price}</h5> <h5
                                        className="d-inline">EGP</h5></span>
                                    <button type="button" className="btn btn-danger"
                                            onClick={() => handelRemove(index)}><h5 className="d-inline">Remove</h5>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            )

        })
        setCartstate({cartItem: cartItem, number: totalitem})

    }, [cart])

    const handelTotalPrice=(count,index)=>{
        if( count !== 0){

            arritem[index]=cart[index].price * count

        }

        totalPrice = arritem.reduce((acc, curr) => acc + curr, 0)

        setCartItem(totalPrice)

    }

    const handelRemove = (ind) => {
        let filterCart = cart.filter((item, index) => {

            return index !== ind;
        });
        setCart([...filterCart]);

    }




    return (
        <div className="col-10 mr-auto ml-auto pl-3 pr-3 mt-5 d-flex">
            <div className="col-8">
                <div className="d-flex justify-content-between  mb-5"><h4>MY CART</h4> <p
                    className="text-secondary ">( {cart.length} Items )</p></div>
                <div className="alert alert-secondary" role="alert"
                     style={{display: `${cartState.number === 0 ? "block" : "none"}`}}>There is no matching products
                </div>
                {cartState.cartItem}
            </div>
            <div className="col-3">
                <div className="bg-white p-3 mb-5">
                    <h4 className="text-danger mb-2">DISCOUNT CODE</h4>
                    <h6 className="mb-2">Enter your promo code</h6>
                    <InpLogin type="text"
                              className="form-control inp-Login mb-4 " id="Email"/>

                    <button type="button" className="btn btn-success ml-auto d-block">APPLY DISCOUNT</button>
                </div>
                <div>

                    <div className="bg-white p-3 mb-2">
                        <h4 className="text-danger mb-2 text-center">ORDER SUMMARY</h4>
                        <div className="d-flex justify-content-between mt-2 pt-3 mb-1 pb-1 ">
                            <h6>SECURE </h6>
                            <h6>{ShowCart} EGP</h6>
                        </div>
                    </div>
                    <button type="button" className="btn btn-success w-100  d-block pl-3 pr-3 pt-4 pb-3 border-0">
                        <div className="d-flex justify-content-between">
                            <h6>SECURE CHECKOUT</h6>
                            <h6>{ShowCart} EGP</h6>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    )
}
export default Cart;