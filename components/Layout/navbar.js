import React from 'react';

export default function Navbar(props){
    return (
    
    <nav className="nav">

        <div className="navTop">

            <div className="navTop__search">
                <input type="text" name="search" id="search"/>
                <label htmlFor="search"><i className="uil uil-search"></i></label>
            </div>

            <div className="navTop__logo">
                <a href="index.html">
                    <img src="img/logo_header.png" alt="LOGO"/>
                </a>
            </div>

            <div className="navTop__item">

                <button>
                    <a href="my_accout.html">
                        <i className="uil uil-heart"></i>
                        <span>Wishlist</span>
                    </a>
                </button>

                <div className="cartBox">

                    <button className="cartBtn">
                        <a href="#">
                            <i className="uil uil-shopping-basket"></i>
                            <span>Cart</span>
                        </a>
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
                    <a href="update_login.html">
                        <i className="uil uil-user-circle"></i>
                        <span>Login</span>
                    </a>
                </button>

                <button className="searchToggle">
                    <i className="uil uil-search menu"></i>
                    <i className="uil uil-times cross"></i>
                </button>

                <button className="navToggle">
                    <i className="uil uil-bars menu"></i>
                    <i className="uil uil-times cross"></i>
                </button>

            </div>

        </div>

        <div className="navList">

            <ul>
                <li><a href="trustRB.html">why trust us</a></li>
                <li><a href="product.html">products</a></li>
                <li><a href="ingredients.html">ingredients</a></li>
                <li><a href="contact.html">contact us</a></li>
            </ul>

        </div>

    </nav>

    )
}