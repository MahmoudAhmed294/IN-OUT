import React, {useContext, useEffect, useState} from 'react';
import Product from "../product/Product";
import {WishlistContext} from "./WishListData";
import {NavLink} from "react-router-dom";

const Wishlist = () => {
    const [Wishlist, setWishlist] = useContext(WishlistContext);
    const [stateProudct, setstateProudct] = useState([]);
    const [AllFilter, setAllFilter] = useState([]);
    const [Styleproudct, setstyleproudct] = useState({
        style: '',
    });

    let indexes = []
    let arrFilter = []
    let mapafterfilter = []
    if (AllFilter.length === 0 && Wishlist.length > 0) {
        setAllFilter([...Wishlist])
    }

    const OrderWishlist = (e) => {
        let selectval = e.target.value
        Wishlist.map((p, index) => {

            arrFilter.push(p.offer)
            if (arrFilter.length === Wishlist.length) {
                for (let n in arrFilter) {
                    let maxPrice = Math.max.apply(null, arrFilter)
                    let indexMaxArr = arrFilter.indexOf(maxPrice)

                    indexes.push(indexMaxArr)
                    arrFilter[indexMaxArr] = "";
                }
            }
        })
        if (indexes.length === Wishlist.length) {

            indexes.map((i, index) => {
                let order = Wishlist[i]
                if (order !== undefined && i !== undefined) {

                    mapafterfilter[index] = order
                }
            })
        }
        if (selectval === "HighTOLow") {
            setWishlist([...mapafterfilter])
        } else if (selectval === "LowToHigh") {
            mapafterfilter.reverse()
            setWishlist([...mapafterfilter])
        } else if (selectval === "All") {
            setWishlist([...Wishlist])
    }
    }
    useEffect(() => {

        const mapWishlist = Wishlist.map((p, index) => {
            if (p.type === "Wishlist") {


                return <Product key={index} name={p.name} img={p.img} price={p.price} offer={p.offer} id={p.key}
                                details={p.details}
                                type={p.type} icon={p.icon} style={Styleproudct.style}/>

            }
        })
        setstateProudct([...mapWishlist])
    }, [Wishlist, Styleproudct, AllFilter])

    const stylecartchange = (type) => {
        if (type === "bar") {

            setstyleproudct({style: "bar"})

        } else {
            setstyleproudct({style: "th"})
        }
    }
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-3 bg-white p-4 mr-2 h-25">
                    <div className="mb-2"><NavLink to="profile">ACCOUNT INFORMATION</NavLink></div>
                    <div className="mb-2"><NavLink to="Wishlist">MY WISHLIST</NavLink></div>
                </div>
                <div className=" col-9 row">
                    <div className="col-12 d-flex  mb-4 rtl">

                        <div>
                            <button className="border-0  bg-transparent text-danger"
                                    onClick={() => stylecartchange("th")}><i className="fas fa-th"></i>
                            </button>
                            <button className="border-0 bg-transparent" onClick={() => stylecartchange("bar")}><i
                                className="fas fa-bars"></i></button>
                            <h6 className="d-inline-block ml-3">View as</h6>
                        </div>
                        <div>
                            <select className="p-1 ltr" onChange={OrderWishlist}>
                                <option defaultValue="All">All</option>
                                <option value="HighTOLow">Price:High> low</option>
                                <option value="LowToHigh">Price:low> High</option>
                            </select>
                            <h6 className="d-inline-block mr-3">Sort By</h6>
                        </div>
                    </div>
                    <div className="alert alert-secondary col-12" role="alert"
                         style={{display: `${Wishlist.length === 0 ? "block" : "none"}`}}>There is no Wishlist item!
                    </div>

                    {stateProudct}


                </div>
            </div>
        </div>
    )
}


export default Wishlist;
