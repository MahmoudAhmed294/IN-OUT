import React, {useEffect, useState} from 'react';
import {InpLogin, BtnLogin, Btnshowpassword} from "./Login_Style";
import {useHistory} from "react-router-dom";

const Login = (props) => {
    let history = useHistory();

    const [dataFrominput, setdataFrominput] = useState({Email: "", password: ""});
    const [Showpassword, setshowpassword] = useState({
        password: false,
        type: "password"
    }, []);
    const Showwords = () => {
        if (Showpassword.password === false) {
            setshowpassword({
                    password: true,
                    type: "text"
                }
            )


        } else {
            setshowpassword({
                    password: false,
                    type: "password"
                }
            )
        }
    }
    const handleChange = (e) => {
        const {id, value} = e.target

        setdataFrominput(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.check(dataFrominput.Email, dataFrominput.password);

    }
    useEffect(() => {
        login()
    }, [props.userData.pass])

    const login = () => {
        let cutProps = props.userData.pass;

        if (cutProps) {
            history.push("/")
            if (cutProps === true && document.location.pathname === "/") {
                props.openProfile(true)
            }
        }


    }
    return (
        <div className="container mt-5">

            <div className="row">

                <div className="col-3">
                    <img src="/img/page.jpg" className="w-100"/>
                </div>
                <form className=" mt-5 col-7" onSubmit={handleSubmit}>
                    <div className="form-group ">
                        <label htmlFor="exampleInputEmail1">Email </label>
                        <InpLogin type="email"
                                  onChange={handleChange} className="form-control inp-Login" id="Email"
                                  aria-describedby="emailHelp" value={dataFrominput.Email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <InpLogin type={Showpassword.type} onChange={handleChange}
                                  value={dataFrominput.password} className="form-control"
                                  id="password"/>
                    </div>
                    <div className="form-group form-check">
                        <Btnshowpassword type="button" className=" bg-transparent border-0 text-secondary "
                                         htmlFor="exampleCheck1" onClick={Showwords}><i
                            className="far fa-eye pr-2"></i>Show Password
                        </Btnshowpassword>
                    </div>
                    <div>
                        <BtnLogin type="submit" className="btn col-5">SIGN IN</BtnLogin>
                        <a className="col-2 ml-2 text-black-50 ">Forget password?</a>
                    </div>
                    <div className="mt-5">
                        You are not a registered customer? <a><h6 className="d-inline color-red">SIGN UP</h6></a>

                    </div>
                </form>
            </div>
        </div>
    )

}

export default Login;
