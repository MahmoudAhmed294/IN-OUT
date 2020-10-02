import React, {Component} from 'react';
import {Redirect, BrowserRouter, Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Cart from './components/cart/Cart';
import Wishlist from './components/wishlist/Wishlist';
import axios from "axios";
import Profile from "./components/Profile/Profile";
import {CartList} from "./components/cart/CartList";
import {WishListData} from "./components/wishlist/WishListData";

class App extends Component {

    state = {}

    componentDidMount() {

        axios.get(`NoDatabase/data/User.json`)
            .then(res => {
                const userData = res.data.userLogin;
                userData.map((i) => {
                    this.setState({
                        id: i.id,
                        Email: i.Email,
                        password: i.password,
                        Name: i.Name,
                        Phone: i.Phone,
                    });

                })
            })
        const userLogin = localStorage.getItem('myData');
        this.setState({userLogin: userLogin})
    }


    checkUserLogin = (email, pass) => {
        if (this.state.Email === email && this.state.password === pass) {
            this.setState({pass: true})

        } else {
            alert(" Error")
        }
    }

    openProfile = (profileOn) => {
        this.setState({profileOn: profileOn})
        localStorage.setItem('myData', this.state.pass);

    }

    render() {
        return (

            <BrowserRouter>
                <CartList>
                    <WishListData>

                        <Navbar name={this.state.Name} loginIsDone={this.state.pass} logout={this.logOut}/>
                        <Switch>

                            <Route exact path='/' component={Home}/>
                            <Route path='/login'>
                                {this.state.profileOn === true ? <Redirect to="/profile"/> :
                                    <Login check={this.checkUserLogin} userData={this.state}
                                           openProfile={this.openProfile}/>}

                            </Route>
                            <Route path={this.state.profileOn === true ? "/profile" : ""}>
                                {this.state.profileOn === true ? <Profile user={this.state}/> : ""}

                            </Route>
                            <Route path="/wishlist">
                                {this.state.profileOn === true ? <Wishlist/> : ''}
                            </Route>

                            <Route path="/cart">
                                {this.state.profileOn === true ? <Cart/> : ''}
                            </Route>

                        </Switch>

                    </WishListData>

                    <Footer/>
                </CartList>
            </BrowserRouter>

        );
    }
}

export default App;
