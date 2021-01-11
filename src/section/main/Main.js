import React from 'react'
import './Main.css'
import Logo from '../../img/header/logo.png'

function Main() {
    return (
        <div className="main">
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#" className="menuLink">Features</a></li>
                            <li><a href="#" className="menuLink">Works</a></li>
                            <li><a href="#" className="menuLink">Our Team</a></li>
                            <li><a href="#" className="menuLink">Testimonials</a></li>
                            <li><a href="#" className="menuLink">Download</a></li>
                        </ul>
                    </div>
                </div>
                <div className="line"></div>
                <div className="main-block">
                    <h1>Your Favorite One Page Multi Purpose Template</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna
                    vel scelerisque nisl consectetur et.</p>
                    <button className="mainBtn">Find out more</button>
                </div>
            </div>
        </div>
    )
}

export default Main
