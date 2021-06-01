import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as S from './style.js'

export default class Topbar extends Component{
    render( ) {
        return(
            <div>
                <S.Nav>
                    <h1 className='topbar__logo'>cult gaia</h1>
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