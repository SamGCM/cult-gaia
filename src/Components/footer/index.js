import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../Pages/Home/images/logo.png'

import * as s from './style.jsx'

export default class Footer extends Component{
    render( ) {
        return( 
            <s.container>
                <div>
                    <img src={logo} alt=' ' />
                    <p>© 2020, CULT GAIA</p>
                </div>
                <div>
                    <h5>NAVIGATION</h5>
                    <ul>
                        <li>About</li>
                        <li>Collection</li>
                        <li>Shop</li>
                        <li>New</li>
                        <li>Sale</li>
                    </ul>
                    <p>Privacy statement</p>
                </div>
                <div>
                    <h5>INFO</h5>
                    <ul>
                        <li>Contact</li>
                        <li>Gift cards</li>
                        <li>Carrers</li>
                        <li>Press</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <h5>FOLLOW US</h5>
                    <ul>
                        <li>Facebook</li>
                        <li>Pinterest</li>
                        <li>Instagram</li>
                        <li>Vimeo</li>
                    </ul>
                    <p>Desing for UPROCK School</p>
                </div>
            </s.container>
        )
    }
}