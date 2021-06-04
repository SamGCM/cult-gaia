import styled from 'styled-components'

export const Nav = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 30px;
    z-index: 2;
    background: transparent;
    width: 100vw;
    position: fixed;
    font-size: 1.5rem;

    #topbar__iconMenu{
        display: none;
    }

    img{
        width: 15rem;
        position: relative;
        right: 5rem;
    }

    ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
        width: 30rem;
        position: relative;
        left: 8rem;
        
        li{
            a{
                font-size: 1.5rem;
                color: black;
            }
        }
    }
    @media (max-width: 575.98px) {
        justify-content: space-between;
        position: absolute;

        img{
            display: none;
        }

        #topbar__iconMenu{
        display: block;
        cursor: pointer;
        div{
            background-color: #ffffff;
            width: 4rem;
            height: 0.3rem;
            margin: 0 0 7px 0;
            margin-left: 10px;
            border-radius: 5px;
            }
        }
        
        ul{
            left: 0;
            position: unset;
            width: 15rem;
            justify-content: space-around;
            .hidden{
            display: none;
            }
            li{
                a{
                    font-size: 2rem;
                    color: #ffffff;
                    font-weight: normal;
                }
            }
        }
    }
    // Dispositivos small (telefones em modo paisagem, com 576px ou mais)
    @media (min-width: 576px) and (max-width: 767.98px) {
        justify-content: space-between;
        position: absolute;
        padding-top: 5px;
        img{
            right: 0;
        }
        
        ul{
            left: 0;
            justify-content: space-around;
            li{
                a{
                    font-size: 1.5rem;
                }
            }
        }
    }
`

