import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "../Components/header.css"
import myImage from "../img/image-avatar.png"

function Header() {

    const [isVisible, serVisible] = useState(false);

   
    return (
        <div>
            <header>
                <div className="container">
                    <div className="header-items">
                        <div className="header-left-items">
                            <div className="logo">
                                <h1>sneakers</h1>
                            </div>
                            <div className="navbar">
                                <ul>
                                    <li><a href="#">collections</a></li>
                                    <li><a href="#">men</a></li>
                                    <li><a href="#">women</a></li>
                                    <li><a href="#">about</a></li>
                                    <li><a href="#">contact</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-right-items">
                            <div id='icon'>
                                <FontAwesomeIcon icon={faCartShopping} />
                                <div className="dropdown-cart">
                                    <p>Cart</p>

                                    <div className="button-cart">
                                        <button id='checkout-btn'>Checkout</button>
                                    </div>
                                </div>

                            </div>
                            <div className="profile">
                                <img src={myImage} alt="photo" className='image-pp' />
                            </div>
                        </div>
                    </div>
                    {/* <div className="line"></div> */}
                </div>
            </header>

        </div>
    )
}

export default Header