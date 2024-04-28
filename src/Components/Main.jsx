import React from 'react'
import "../Components/main.css"
import shoes from "../img/1.jpg"
import shoes2 from "../img/2.jpg"
import shoes3 from "../img/3.jpg"
import shoes4 from "../img/4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Main() {
    return (
        <div>
            <section id='section'>
                <div className="container">
                    <div className="section-items">
                        <div className="section-left-items">
                            <div className="image-items">
                                <img src={shoes} alt="" />
                            </div>
                            <div className='image-properties'>
                                <div>
                                    <img src={shoes} alt="" />
                                </div>
                                <div>
                                    <img src={shoes2} alt="" />
                                </div>

                                <div>
                                    <img src={shoes3} alt="" />
                                </div>

                                <div>
                                    <img src={shoes4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="section-right-items">
                            <p id='company-name'>sneaker company</p>
                            <h2 id='product-title'>Fall Limited Edition Sneakers</h2>
                            <p id='product-text'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>


                            <div className="product-price">
                                <p id='price-now'>$125.00</p>
                                <p id='discount'>50%</p>
                            </div>
                            <div className="original-price">
                                <del>$250.00</del>
                            </div>


                            <div className="product-buttons">
                                <div className="counter">
                                    <FontAwesomeIcon icon={faMinus} className='plus-minus' />
                                    <span>0</span>
                                    <FontAwesomeIcon icon={faPlus} className='plus-minus' />
                                </div>

                                <div className="add-cart">
                                  
                                    <button id='cart'>
                                    <FontAwesomeIcon icon={faCartShopping} id='cart-icon' />
                                        Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Main