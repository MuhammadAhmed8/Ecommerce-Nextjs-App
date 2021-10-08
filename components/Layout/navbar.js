/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NextLink from 'next/link';
import { Link } from '@material-ui/core';
import { useAuth } from '../context/AuthProvider';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchIcon from '@material-ui/icons/Search';
import TocIcon from '@material-ui/icons/Toc';
import SearchBar from "../Search/SearchBar";
import { useCartContext } from '../context/CartProvider';

export default function Navbar(props){

    const [auth, authDispatch] = useAuth();
    const [cart] = useCartContext();

    const count = cart ? cart.items.reduce((count, item)=>count+item.quantity,0) :0;

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

                            <h2 className="cartOverlay__heading">Items ({count})</h2>

                            {
                                cart ? cart.items.map((item)=>(
                                    <div key={item.id} className="cartOverlay__item">

                                    <div className="cartOverlay__item--info">
                                        <img src={item.product_image[0].url} alt=""/>
                                        <div className="cartOverlay__item--name" >
                                            <h3 style={{fontSize:14}}>{item.name}</h3>
                                            <p>{item.variant_name}</p>
                                        </div>
                                    </div>

                                    <div className="cartOverlay__item--name" >
                                        <h3 style={{fontSize:12}}>{item.price_total}</h3>
                                        <p style={{fontSize:12}}>Q.ty {item.quantity}</p>
                                    </div>
                                    </div>
                                )) 
                                : "No items"
                            }


                            <hr/>

                            <div className="cartOverlay__total">
                                <h2>Total</h2>
                                <h2>{cart && cart.subtotal}$</h2>
                            </div>

                            <div className="cartOverlay__btn">
                                <button className="btn">View Cart</button>
                            </div>

                        </div>

                        <div className="cartOverlay__ship">
                            <img src="/img/car_ship.png" alt=""/>
                            <p>
                                
                                 {(() => {
                                    if(count === 0){
                                        return "Add 3 items to get free shipping."
                                    }
                                    else if(count === 1){
                                        return "Add 2 more items to get free shipping."
                                    }
                                    else if(count === 2){
                                        return "Add 1 more item to get free shipping."
                                    }
                                    else{
                                        return (
                                            "Your order is available for free shipping."
                                        )
                                    }
                                    
                                })()}
                                
                            </p>
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
                        <SearchIcon></SearchIcon>
                  
                </button>

                <button className="navToggle">
                <TocIcon></TocIcon>

                   
                </button>

            </div>

        </div>

        <div className="navList">

            <ul>
                <li>
                    <NextLink href="/trust">
                        <Link color="secondary">
                            why trust us
                        </Link>
                    </NextLink>
                </li>
                <li>
                    <NextLink href="/products">
                    <Link color="secondary">products</Link>
                    </NextLink>
                </li>
                    
                <li>
                    <NextLink href="/ingredients">
                        <Link color="secondary">
                            Ingredients
                        </Link>
                    </NextLink>
                </li>

                <li>
                    <NextLink href="/contact">
                        <Link color="secondary">
                            contact
                        </Link>
                    </NextLink>
                </li>

            </ul>

        </div>

    </nav>

    )
}
