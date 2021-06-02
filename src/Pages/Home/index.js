import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Topbar from '../../Components/topbar/index.js'
import Footer from '../../Components/footer/index.js'

import img from './women.jpg'
import bag from './bag.jpg'
import dress from './dress.jpg'
import earring from './earning.jpg'
import shoes from './shoes.jpg'
import bagFloat from './bag-float.png'

import img1 from './img-1.jpeg'
import img2 from './img-2.jpg'
import img3 from './img-3.jpg'
import img4 from './img-4.jpg'
import img5 from './img-5.jpg'

import JasminLarian from './designer-cult-gaia.png'

import * as s from './style.js'

export default class Home extends Component{
    render( ) {
        return(
            <div>
                <Topbar/>
                <s.container>
                    <div id='container__box'>
                        <p>Cult</p>
                        <div id='container__box-2' >
                            <div id='box__stick'></div>
                            <p>Gaia</p>
                        </div>
                        <p id='container__box-caption'>Is inpired <div className='circle'/> 
                        by nature <div className='circle'/> and women </p>
                    </div>
                    <img src={img} alt='' />
                    <figcaption>
                        Resort 2021 <div id='caption__stick'>⟶</div>
                    </figcaption>
                </s.container>
                <s.section>
                    <div className='container__title'>
                        <h3>NEW ARRIVALS</h3>
                        <div className='title__stick' ></div>
                    </div>
                    <div className='container__grid'>
                        <img id='imgBag' className='grid-item' src={bag} alt='' />
                        <img id='imgEarring' className='grid-item' src={earring} alt='' />
                        <div className='grid-item'>
                            <img id='imgDress'   src={dress} alt='' />
                            <figcaption >
                                <span>
                                    <p id='caption__name-item'>LAILA  KNIT  DRESS - WILD ROSE</p>
                                    <p id='caption__price'>$ 258</p>
                                </span>
                            </figcaption>
                        </div>
                        <img id='imgShoes' className='grid-item' src={shoes} alt='' />
                        <Link to=' '>View all   ⟶</Link>
                    </div>
                </s.section>
                <s.phrase>
                    <div>
                        a wardrobe full of magic, <br/>
                        one that  glows with each acessory.
                        <img src={bagFloat} alt=' ' />
                    </div>
                </s.phrase>
                <s.sectionImg>
                    <div className='container__title'>
                        <h3>COLLECTION</h3>
                        <div className='title__stick' ></div>
                    </div>
                    <div id='container__imgs'>
                        <img id='img3' className='imgHover' src={img3} alt=' '  />
                        <img id='img2' className='imgHover' src={img2} alt=' '  />
                        <img id='img5' className='imgHover' src={img5} alt=' '  />
                        <img id='img4' className='imgHover' src={img4} alt=' '  />
                        <img id='img1' className='imgHover' src={img1} alt=' ' />
                    </div>
                </s.sectionImg>
                <s.aboutDesigner>
                    <p>"When you look at all the most beautiful things in the world and in nature,<br/>
                        it is perfect in its imperfection. It's soul - perfection is sterile nad cold.<br/>
                        I also believe timeless pieces are artful but obvious in their restraint "<br/>
                        <br/>
                        Jasmin Larian
                    </p>
                    <div>
                        <img src={JasminLarian} alt=' ' />
                    </div>
                </s.aboutDesigner>
                <Footer/>
            </div>
        )
    }
}