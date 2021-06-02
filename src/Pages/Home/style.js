import styled from 'styled-components'

export const container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    #container__box{
        position: relative;
        left: 15vw;
        p{
            font-family: 'Cinzel';
            font-size: 5rem;
            font-weight: 600;
        }
        #box__stick{
            background: black;
            width: 13rem;
            height: 0.2rem;
            margin-right: 3rem;
        }
        #container__box-2{
            display: flex;
            align-items: center;
        }
        #container__box-caption{
            display: flex;
            align-items: baseline;
            font-family: 'Lato';
            font-size: 1.5rem;
            .circle{
                background: #E0BA8E;
                border-radius: 50%;
                width: 0.7rem;
                height: 0.7rem;
                margin: 0 10px 0 10px;
            }
        }
    }
    img{
        height: auto;
        width: 49.3vw;
    }
    
    figcaption{
        font-family: 'Lato';
        font-size: 1.5rem;
        display: flex;
        position: absolute;
        left: 15%;
        bottom: 10px;
        #caption__stick{
            margin-left: 1rem;
        }
    }
`

export const section = styled.section`
    display: flex;
    flex-direction: column;
    .container__title{
        width: fit-content;
        display: flex;
        align-items: center;
        position: relative;
        left: 15vw;
        margin: 80px 0 80px 0;
        h3{
            font-weight: normal;
        }
        .title__stick{
            background: black;
            width: 13rem;
            height: 0.1rem;
            margin-left: 3rem;
        }
    }
    .container__grid{
        max-width: 100vw;
        width: 80%;
        position: relative;
        left: 15vw;
        display: grid;
        grid-template-columns: 250px 50px 400px 50px 200px;
        grid-template-rows: 50px 200px 30px 120px 50px;

        

        #imgBag{
            width: 25rem;
            grid-column-start: 1;
            grid-row-start: 2;
        }

        #imgEarring{
            position: relative;
            margin-left: 10rem;
            width: 15rem;
            grid-column-start: 1;
            grid-row-start: 4;
        }
            
        div{
            grid-column-start: 3;
            grid-row-start: 1;
            grid-row-end: 6;
            display: flex;
            flex-direction: column-reverse;
            #imgDress{
                width: 40rem;
                position: relative;
            }
            figcaption{

                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2;
                width: 20em;
                height: 4em;
                background: white;
                opacity: 60%;
                span{
                    #caption__name-item{
                        text-align: center;
                        font-size: 1.2rem;
                        font-weight: bold;
                    }

                    #caption__price{
                        text-align: center;
                        font-size: 1.2rem;
                        font-weight: bold;
                        padding: 10px;
                    }
                }
            }
        }

        #imgShoes{
            width: 25rem;
            grid-column-start: 5;
            grid-row-start: 2;
        }

        a{
            text-decoration: none;
            font-size: 1.5rem;
            font-weight: normal;
            align-self: flex-end;
            color: black;
            justify-self: right;
            grid-column-start: 5;
            grid-row-start: 5;
        }
        .grid-item{
            &:hover{
                transform: scale(1.1, 1.1);
            }
        }
    }
`
export const phrase = styled.section`
    div{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        font-family: 'Cinzel';
        font-size: 3rem;
        background: #E5DCD7;
        height: 20vw;
        margin: 100px 0 100px 0;
        img{
            position: absolute;
            width: 25rem;
            transform: rotateZ(-35deg);
            right: 25rem;
            top: 12rem;
        }
    }
`

export const sectionImg = styled.section`
    display: flex;
    flex-direction: column;
    .container__title{
        width: fit-content;
        display: flex;
        align-items: center;
        position: relative;
        left: 15vw;
        margin: 80px 0 80px 0;
        h3{
            font-weight: normal;
        }
        .title__stick{
            background: black;
            width: 13rem;
            height: 0.1rem;
            margin-left: 3rem;
        }
    }
    #container__imgs{
        left: 11.5vw;
        width: fit-content;
        display: flex;
        align-items: center;
        position: relative;
        .imgHover{
            position: relative;
            filter: grayscale(0.4);
            &:hover{
                transform: scale(1.2,1.2);
                z-index: 3;
                filter: grayscale(0);
            }
        }
        #img3{
            width: 20rem;
            
            left: 5rem;
            
        }
        #img2{
            width: 25rem;
            
            bottom: 2rem;
            left: 3rem;
        }

        #img4{
            width: 20rem;
            bottom: 8rem;
            
        }
        #img5{
            width: 20rem;
            bottom: 3rem;
            z-index: 1;
            left: 2rem;
        }

        #img1{
            width: 20rem;
            z-index: 1;
            right: 2rem;
            
        }
    }
    span{
        font-size: 1.5rem;
        font-weight: bold;
    }
`
export const aboutDesigner = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 100px 0 50px 0;

    p{
        font-size: 2rem;
        position: relative;
        left: 14.5vw;
        text-align: right;
        z-index: 2;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        overflow: hidden;
        height: 23rem;
        width: 23rem;
        position: relative;
        right: 25.3vw;
        top: -1rem;
        
        img{
            width: 39rem;
        }
    }
`
