import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as S from './style.js'

import logo from '../../Pages/Home/logo.png'

export default class Topbar extends Component{
    render( ) {
        return(
            <div>
                <S.Nav>
                    <img src={logo} alt=' ' />
                    <ul className='topbar__nav'>
                        <li className='nav__item'>
                            <Link to=''>SHOP</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='' >LOG IN</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='' >WISHLIST</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to=''>BAG</Link>
                        </li>
                    </ul>
                </S.Nav>
            </div>
        )
    }
}