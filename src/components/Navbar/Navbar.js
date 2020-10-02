import React, {useState, useEffect, useContext} from 'react';
import {Link} from "react-router-dom";
import "./style.css";
import {CartContext} from "../cart/CartList";

const Navbar = (props) => {
    const [cart, setCart] = useContext(CartContext);

    const [userlogin, SetuserLoginInfo] = useState({name: 'Join now', signOut: '', wishlist: "/login", cart: "/login"});


    function updateUserName() {
        if (props.loginIsDone === true) {
            let FirstName = props.name.split(" ");
            SetuserLoginInfo({
                name: FirstName[0],
                signOut: <i className="fas fa-sign-out-alt i_font--size"></i>,
                wishlist: "/wishlist",
                cart: "/cart"
            });

        }
    }

    useEffect(() => {
        updateUserName()

    }, [props.loginIsDone])
    const SignOut = () => {
        props.logout(true)
    }
    return (
        <nav className="col-xl-12  bg-white shadow-sm">
            <div className="nav_container">

                <div className=" d-flex     align-items-center">
                    <Link className="nav-brand" to="/">
                        <img src="img/logo.svg"/>
                    </Link>

                    <div className="search-group--nav">
                        <label className="icon--search_nav">
                            <i className="fas fa-search"></i>
                        </label>
                        <input
                            type="Search"
                            className="Inp_search--nav"
                            placeholder="Search a product name"
                        />
                    </div>
                    <div className="ml-4 d-flex align-items-center">
                        <div>
                            <a>العربية</a>
                        </div>
                        <Link className="Btn--Admin_nav " to="/login">
                            <div>
                                <i className="far fa-user i_font--size"></i>
                            </div>
                            <div className="pl-1 line--h_nav">
                                <h6 className="mb-0">Welcome,</h6>
                                <span className="text-danger">{userlogin.name} <i
                                    className="fas fa-angle-right"></i></span>
                            </div>
                        </Link>
                        <div className="ml-3">
                            <Link to={userlogin.wishlist}>
                                <i className="far fa-heart i_font--size"></i>
                            </Link>
                        </div>
                        <div className="ml-3">
                            <Link to={userlogin.cart}>
                                <i className="fas fa-shopping-cart i_font--size position-relative">
              <span className="num--alerts_Nav" style={{display: `${cart.length === 0 ? "none" : "block"}`}}>
                  {cart.length}
              </span>
                                </i>
                            </Link>
                        </div>
                        <div className="ml-3">
                            <button className="border-0 bg-transparent ">
                                {userlogin.signOut}
                            </button>
                        </div>
                    </div>
                </div>


                <ul className="list_nav">
                    <li>
                        <div className="dropdown">
                            <button className="btn btn-white  " type="button" id="" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                LIVING ROOM
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="d-flex">

                                    <ul className="mr-5">
                                        <h6>LIVING ROOM SET</h6>
                                        <li><a> Sofa Set</a></li>
                                        <li><a>CORNER SET</a></li>
                                        <li><a>RECLINER CHAIR</a></li>
                                        <li><a>RECLINER SOFA SET</a></li>
                                    </ul>
                                    <ul>
                                        <h6>SHOP BY ITEM</h6>
                                        <li> SOFA SEAT</li>
                                        <li> LOVESEAT</li>
                                        <li> CHAIR</li>
                                    </ul>
                                    <div className="ml-auto col-3 mr-auto">
                                        <img src="img/living.jpg" className='w-100'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>

                    <li>

                        <div className="dropdown">
                            <button className="btn   btn-white  " type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                BED ROOM
                            </button>
                        </div>

                    </li>
                    <li>
                        <div className="dropdown">
                            <button className="btn   btn-white  " type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                KIDS & TEEN ROOM
                            </button>
                        </div>

                    </li>
                    <li>

                        <div className="dropdown">
                            <button className="btn   btn-white  " type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                DINING ROOM
                            </button>
                        </div>

                    </li>
                    <li>
                        <div className="dropdown">
                            <button className="btn   btn-white  " type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                DINING ROOM
                            </button>
                        </div>

                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
