import React from 'react';
import {NavLink} from "react-router-dom";

const Profile = (props) => {
    const user = props.user
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-3 bg-white p-5 mr-2 h-25">
                    <div className="mb-2"><NavLink to="/profile">ACCOUNT INFORMATION</NavLink></div>
                    <div className="mb-2"><NavLink to="/wishlist">MY WISHLIST</NavLink></div>
                </div>

                <div className="col-8  p-4  bg-white">
                    <div className="w-100 mb-4">
                        <h6>First name</h6>
                        <p className="text-secondary">{user.Name}</p>
                    </div>
                    <div className="d-flex">
                        <div>
                            <h6>Email</h6>
                            <p className="text-secondary">{user.Email}</p>
                        </div>
                        <div className=" ml-auto mr-5">
                            <h6>Phone number
                            </h6>
                            <p className="text-secondary">{user.Phone}</p>
                        </div>

                    </div>

                </div>


            </div>
        </div>

    )
}


export default Profile;
