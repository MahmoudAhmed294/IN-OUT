import React, {useEffect, useState, useContext} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import "./style-home.css"
import Product from "../product/Product";
import ProductList from "../product/ProductList";
// export const ProductHomeContext =React.createContext();
// </ProductHomeContext.Provider>

const Home = () => {
    const [showcarousel, setcarousel] = useState({carousel: ""})
    const [ShowproductHomeType, SetproductHomeType] = useState({
        newItem: "", offers: '', Featured: ''
    })
    useEffect(() => {

        axios.get(`NoDatabase/data/Home.json`).then(res => {
            const userData = res.data.carousel;
            const carousel = userData.map((i, index) => {
                return (
                    <div className={index === 0 ? "carousel-item active" : "carousel-item"} key={index}>
                        <div className="shadowOnimg">
                        </div>
                        <img src={i.img} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>{i.details}</h2>
                            <Link to="/pro" className="Link_ShopNow">Shop Now</Link>

                        </div>
                    </div>

                )
            })
            setcarousel({carousel: carousel})

            const productHomeData = res.data.productHome;

            const filternewItem = productHomeData.filter((item) => {

                    return item.type === "newItem"
                }
            )
            const filteroffers = productHomeData.filter((item) => {

                    return item.type === "offers"
                }
            )
            const filterFeatured = productHomeData.filter((item) => {

                    return item.type === "Featured"
                }
            )
            const productnewItem = filternewItem.map((p, index) => {
                return (
                    <Product name={p.Name} img={p.img} price={p.price} offer={p.offer} id={p.id} details={p.details}
                             key={index}/>
                )
            })
            const productoffers = filteroffers.map((p, index) => {
                return (
                    <Product name={p.Name} img={p.img} price={p.price} offer={p.offer} id={p.id} details={p.details}
                             key={index}/>
                )
            })
            const productFeatured = filterFeatured.map((p, index) => {
                return (
                    <Product name={p.Name} img={p.img} price={p.price} offer={p.offer} id={p.id} details={p.details}
                             key={index}/>
                )
            })


            SetproductHomeType({newItem: productnewItem, offers: productoffers, Featured: productFeatured})

        })
    }, [])
    return (
        <div className="App">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    {showcarousel.carousel}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                   data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
                   data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="container mt-5">
                <div className="row ">

                    <div className="position-relative hover--contact_home mb-4 col-4 p-0 ml-3">
                        <div className="h-100 ">

                            <a className=" img-content_Home"><img
                                className="img_Home" src="img/living.jpg" alt=".."/></a>
                            <div className="overlay"></div>
                            <div className="Title-img-content"><h5>LIVING ROOM</h5></div>

                        </div>
                    </div>

                    <div className="position-relative hover--contact_home mb-4 col-7 p-0 ml-3">
                        <div className="h-100 ">
                            <a className=" img-content_Home">
                                <img
                                    className="img_Home" src="img/bed.jpg" alt=""/></a>
                            <div className="overlay"></div>

                            <div className="Title-img-content"><h5>BED ROOM</h5></div>
                        </div>
                    </div>

                    <div className="position-relative hover--contact_home mb-4 col-4 p-0 ml-3">
                        <div className="h-100 ">

                            <a className=" img-content_Home">
                                <img className="img_Home" src="img/room.jpg" alt=""/></a>
                            <div className="overlay"></div>
                            <div className="Title-img-content">
                                <h5>KID & TEENS ROOM</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-relative hover--contact_home mb-4 col-7 p-0 ml-3">
                        <div className="h-100 ">

                            <a className=" img-content_Home">
                                <img
                                    className="img_Home" src="img/din.jpg" alt=""/></a>
                            <div className="overlay"></div>

                            <div className="Title-img-content"><h5>DINING ROOM</h5></div>
                        </div>
                    </div>

                    <div className="position-relative hover--contact_home mb-4 col-4 p-0 ml-3">
                        <div className="h-100 ">

                            <a className="mb-4 img-content_Home">
                                <img
                                    className="img_Home" src="img/tv-unit.png" alt=""/></a>
                            <div className="overlay"></div>

                            <div className="Title-img-content"><h5>Home DECOR</h5></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h4 className="text-center mt-2 mb-5">NEW ARRIVALS</h4>
                <div className="row justify-content-center">
                    {
                        ShowproductHomeType.newItem
                    }
                </div>

            </div>
            <div className="container mt-5">

                <h4 className="text-center mt-2 mb-5">HOT SALE</h4>
                <div className="row justify-content-center">
                    {
                        ShowproductHomeType.offers

                    }

                </div>
            </div>
            <div className="container mt-5">

                <h4 className="text-center mt-2 mb-5">Featured</h4>
                <div className="row justify-content-center">
                    {ShowproductHomeType.Featured}


                </div>
            </div>


        </div>
    );
}

export default Home;
