import React from 'react';
import NextLink from 'next/link';
import { Link } from '@material-ui/core';
import { useAuth } from '../context/AuthProvider';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchBar from "../Search/SearchBar";

export default function Navbar(props){

    const [auth, authDispatch] = useAuth();

    return (
    
    <nav className="nav">

        <div className="navTop">

            <div>
                <SearchBar></SearchBar>
            </div>

            <div className="navTop__logo">
                <a href="index.html">
                    <img src="/img/logo_header.png" alt="LOGO"/>
                </a>
            </div>

            <div className="navTop__item">

                <button>
                    <a href="my_accout.html">
                        <i className="uil uil-heart">
                        <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                        </i>
                        <span>Wishlist</span>
                    </a>
                </button>

                <div className="cartBox">

                    <button className="cartBtn">
                        <NextLink href="/cart">
                            <Link>
                                <i className="uil uil-shopping-basket">
                                    <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                                </i>
                                <span>Cart</span>
                            </Link>
                            
                        </NextLink>
                    </button>

                    <div className="cartOverlay">

                        <button className="cartClose"><i className="uil uil-times"></i></button>

                        <div className="cartOverlay__content">

                            <h2 className="cartOverlay__heading">Items (2)</h2>

                            <div className="cartOverlay__item">

                                <div className="cartOverlay__item--info">
                                    <img src="img/fav_1.png" alt=""/>
                                    <div className="cartOverlay__item--name">
                                        <h3><a href="#"> Product Name Here</a></h3>
                                        <p>150ml / 0.5 oz</p>
                                    </div>
                                </div>

                                <div className="cartOverlay__item--name">
                                    <h3>$150.00</h3>
                                    <p>Q.ty 1</p>
                                </div>
                            </div>


                            <div className="cartOverlay__item">

                                <div className="cartOverlay__item--info">
                                    <img src="img/fav_1.png" alt=""/>
                                    <div className="cartOverlay__item--name">
                                        <h3><a href="#"> Product Name Here</a></h3>
                                        <p>150ml / 0.5 oz</p>
                                    </div>
                                </div>

                                <div className="cartOverlay__item--name">
                                    <h3>$150.00</h3>
                                    <p>Q.ty 1</p>
                                </div>
                            </div>

                            <hr/>

                            <div className="cartOverlay__total">
                                <h2>Total</h2>
                                <h2>$300.00</h2>
                            </div>

                            <div className="cartOverlay__btn">
                                <button className="btn">View Cart</button>
                            </div>

                        </div>

                        <div className="cartOverlay__ship">
                            <img src="img/car_ship.png" alt=""/>
                            <p>Your order is available for FREE shipping</p>
                        </div>

                    </div>

                </div>

                <button>
                    {auth.user === null ? (
                    <NextLink href="/login">
                        <Link>
                            <i className="uil uil-user-circle">
                                <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
                            </i>
                            <span>Login</span>
                        </Link>
                    </NextLink>)
                    :
                    (<NextLink href="/customer/my-account">
                        <Link>
                            <i className="uil uil-user-circle">
                                <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
                            </i>
                            <span>Account</span>
                        </Link>
                    </NextLink>)
                }       
                    
                </button>

                <button className="searchToggle">
                    <i className="uil uil-search menu"></i>
                    <i className="uil uil-times cross"></i>
                </button>

                {/* <button className="navToggle">
                    <i className="uil uil-bars menu"></i>
                    <i className="uil uil-times cross"></i>
                </button> */}

            </div>

        </div>

        <div className="navList">

            <ul>
                <li>
                    <NextLink href="/trust">
                        <Link>
                            why trust us
                        </Link>
                    </NextLink>
                </li>
                <li>
                    <NextLink href="/products">
                    <Link>products</Link>
                    </NextLink>
                </li>
                    
                <li>
                    <NextLink href="/ingredients">
                        <Link>
                            Ingredients
                        </Link>
                    </NextLink>
                </li>

                <li>
                    <NextLink href="/contact">
                        <Link>
                            contact
                        </Link>
                    </NextLink>
                </li>

            </ul>

        </div>

    </nav>

    )
}
