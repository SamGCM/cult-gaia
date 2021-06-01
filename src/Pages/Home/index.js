import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Topbar from '../../Components/topbar/index.js'
import img from './women.jpg'

import * as S from './style.js'

export default class Home extends Component{
    render( ) {
        return(
            <div>
                <Topbar/>
                <S.container>
                    <div id='container__box'>
                        <p>Cult</p>
                        <div id='container__box-2' >
                            <span id='box__stick'></span>
                            <p>Gaia</p>
                        </div>
                        <p id='container__box-caption'>Is inpired <div className='circle'/> 
                        by nature <div className='circle'/> and women </p>
                    </div>
                    <img src={img} alt='' />
                    <figcaption>
                        Resort 2021 <div id='caption__stick'>⟶</div>
                    </figcaption>
                </S.container>

                
            </div>
        )
    }
}