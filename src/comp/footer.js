import React from "react";
import './footer.css'
import { FaHeadphonesAlt, FaPiggyBank, FaShippingFast, FaWallet } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="container">
                <div className="left-box">
                    <div className="box">
                        <div className="icon_box">
                            <FaPiggyBank />
                        </div>
                        <div className="detail">
                            <h3>Great Saving</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>
                        <div className="box">
                        <div className="icon_box">
                            <FaShippingFast />
                        </div>
                        <div className="detail">
                            <h3>free delivery</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                            <FaHeadphonesAlt />
                        </div>
                        <div className="detail">
                            <h3>24X7 support</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                            <FaWallet />
                        </div>
                        <div className="detail">
                            <h3>money back</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>
                </div>
                <div className="right_box">
                    <div className="header">
                        <div className="img">
                        <img src="image/Logo.png" alt=""></img>
                        <h2>EzyShop</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur necessitatibus neque, totam itaque qui voluptatem.</p>
                    </div>
                    <div className="bottom">
                        <div className="box">
                            <h3>Your Account</h3>
                            <ul>
                                <li>About us</li>
                                <li>Account</li>
                                <li>Payment</li>
                                <li>sales</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>products</h3>
                            <ul>
                                <li>Delivery</li>
                                <li>Track Oder</li>
                                <li>New Product</li>
                                <li>old Product</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>Contact us</h3>
                            <ul>
                                <li>4b, Msquare Plaza Shop, Computer Village Ikeja </li>
                                <li>+(234)8023455655</li>
                                <li>info@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer