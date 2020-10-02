import React from "react";
import "./Footer-Style.css"

const Footer = () => {


    return (
        <footer className="bg-white mt-5">
            <section className=" mb-5 position-relative ">
                <div className="img">
                    <img src="/img/footer.jpg" className="img-cover_footer"/>
                </div>
                <div className=" Social--Footer">
                    <div className="container">
                        <div className="row  row--Footer">
                            <img src="/img/logo.svg" className="   img--Social_Footer col-3 "/>
                            <p className="ml-auto col-9">In&out furniture company has a rich history of providing
                                beautiful , comfortable home furnishings and the highest service for its customers </p>
                            <ul className="d-flex ml-auto pr-4">
                                <li className="list-group p-3 "><a href="#" className="text-white"><i
                                    className="fab fa-facebook-f"></i></a></li>
                                <li className="list-group p-3 "><a href="#" className="text-white"><i
                                    className="fab fa-instagram"></i></a></li>
                                <li className="list-group p-3 "><a href="#" className="text-white"><i
                                    className="fab fa-youtube"></i></a></li>
                                <li className="list-group p-3 "><a href="#" className="text-white"><i
                                    className="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <div className="bg-white mt-5 mb-3 pt-5">

                <div className="container">
                    <div className="row justify-content-between">
                        <div className="ml-1">
                            <ul className="list-group">
                                <li className="list-group mb-5"><h5>THE COMPANY</h5></li>
                                <li className="list-group mb-2"><a href="#" className="list-group-item-action">About
                                    AS</a></li>
                                <li className="list-group mb-2"><a href="#"
                                                                   className="list-group-item-action">Careers</a></li>
                                <li className="list-group mb-2"><a href="#"
                                                                   className="list-group-item-action">Project</a></li>
                                <li className="list-group mb-2"><a href="#"
                                                                   className="list-group-item-action">Showrooms</a></li>
                                <li className="list-group mb-2"><a href="#" className="list-group-item-action">Contact
                                    US</a></li>
                            </ul>
                        </div>
                        <div className="ml-1">
                            <ul className="list-group">
                                <li className="list-group mb-5"><h5>CUSTOMER</h5></li>
                                <li className="list-group mb-2"><a href="#" className="list-group-item-action"> FAQ</a>
                                </li>
                                <li className="list-group mb-2"><a href="#" className="list-group-item-action"> Return
                                    Policy</a></li>
                                <li className="list-group mb-2"><a href="#"
                                                                   className="list-group-item-action"> Guarantees </a>
                                </li>
                                <li className="list-group mb-2"><a href="#"
                                                                   className="list-group-item-action"> Instalment </a>
                                </li>
                                <li className="list-group mb-2"><a href="#" className="list-group-item-action"> service
                                    Change </a></li>
                                <li className="list-group mb-2"><a href="#" className="list-group-item-action"> Shipping
                                    delivery </a></li>
                                <li className="list-group mb-2"><a href="#" className="list-group-item-action"> Customer
                                    care </a></li>

                            </ul>
                        </div>
                        <div className="ml-1">
                            <ul className="list-group">
                                <li className="list-group mb-5"><h5>MY ACCOUNT</h5></li>
                                <li className="list-group mb-2"><a href="#" className="list-group-item-action"> Sign
                                    in </a></li>
                                <li className="list-group mb-2"><a href="#" className="list-group-item-action"> View
                                    Cart </a></li>
                                <li className="list-group mb-2"><a href="#" className="list-group-item-action"> My
                                    Wishlist </a></li>

                            </ul>
                        </div>

                    </div>


                </div>

            </div>
        </footer>


    )

}
export default Footer;