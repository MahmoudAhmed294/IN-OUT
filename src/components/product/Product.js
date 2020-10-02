import React, {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {CartContext} from '../cart/CartList';

import {
    Card,
    Imgbody,
    Cardbody,
    Img,
    BtnLove,
    DEl,
    PriceSpan,
    H5,
    BtnADD,
    PriceContent,
    DetalisContent
} from "./Product-style";
import {WishlistContext} from "../wishlist/WishListData";


const Product = (props) => {
    let arrId = []
    const [cart, setCart] = useContext(CartContext);

    const [Wishlist, setWishlist] = useContext(WishlistContext);
    const [StateWishlist, SetStateWishlist] = useState({
        icon: false
    })
    useEffect(() => {

        const addIcon = () => {
            Wishlist.map((p, i) => {
                if (Wishlist[i].key === props.id) {
                    SetStateWishlist({icon: true})
                }
            })

        }
        addIcon()
    }, [cart, Wishlist])

    const addToCart = () => {
        let addId = true;
        let numindex = [];

        cart.map((p, i) => {
            if (cart[i].key === props.id && cart[i].type === undefined) {
                addId = false;


                numindex.push(i)
            }
        })
        if (addId) {
            const product = {
                name: props.name,
                img: props.img,
                price: props.price,
                offer: props.offer,
                key: props.id,
                details: props.details,
                num: 1
            };
            setCart(currentState => [...currentState, product]);
        } else {
            cart[numindex[0]].num += 1
        }
    }
    let iconOn = ''
    const AddtoWishlist = () => {
        let wishlistID = true;
        Wishlist.map((p, i) => {
            if (Wishlist[i].key === props.id) {
                wishlistID = false;
                SetStateWishlist({
                    icon: true
                })


            }
        })
        if (wishlistID) {
            const WishlistProduct = {
                name: props.name,
                img: props.img,
                price: props.price,
                offer: props.offer,
                key: props.id,
                details: props.details,
                num: 1,
                icon: "fas fa-heart",
                type: "Wishlist"
            };
            setWishlist(currentState => [...currentState, WishlistProduct]);
        } else {
            SetStateWishlist({
                icon: false
            })

            let filterCart = Wishlist.filter((item, index) => {

                return item.key !== props.id;
            });
            setWishlist([...filterCart]);


        }
    }
    return (
        <Card key={Math.random()} bar={props.style}>

            <Imgbody bar={props.style}>
                <Img src={props.img} alt="..."/>
            </Imgbody>
            <Cardbody bar={props.style}>
                <BtnLove bar={props.style} onClick={AddtoWishlist}><i
                    className={props.icon || StateWishlist.icon ? "fas fa-heart" : "far fa-heart"}></i><PriceSpan
                    style={{display: `${props.style === "bar" ? "block" : "none"}`}} className="ml-2"> Add to
                    wishlist</PriceSpan></BtnLove>
                <DetalisContent bar={props.style}>
                    <H5>{props.name}</H5>
                    <PriceContent bar={props.style}>

                        <DEl bar={props.style}><h6>{props.price} <span>EGP</span></h6></DEl>
                        <PriceSpan><H5>{props.offer} <span>EGP</span> </H5> </PriceSpan>
                    </PriceContent>
                </DetalisContent>
            </Cardbody>
            <BtnADD onClick={addToCart} bar={props.style}>Add To card</BtnADD>
        </Card>
    )
}

export default Product;