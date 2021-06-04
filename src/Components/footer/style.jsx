import styled from 'styled-components'

export const container = styled.section`
    display: flex;
    justify-content: space-around;
    background: #7E6561;
    color: white;
    padding: 0 0 20px 0;
    div{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        
        img{
            width: 15rem;
        }

        p{
            
            font-size: 0.8rem;
            opacity: 85%;
            color: #e5dcd7;
        }

        h5{
            padding: 10px 0 20px 0;
            font-size: 1.5rem;
        }

        ul{
            padding: 0 0 50px 0;
            
        }

        li{
            
            font-size: 1.5rem;
            padding: 0 0 10px 0;
            width: fit-content;
            position: relative;
            cursor: pointer;
            &::before{
                content: "";
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: #fff;
                visibility: hidden;
                -webkit-transform: scaleX(0);
                transform: scaleX(0);
                -webkit-transition: all 0.3s ease-in-out 0s;
                transition: all 0.3s ease-in-out 0s;
            }
            &:hover:before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
                }
        }
    }

    @media (max-width: 575.98px){
        div{
            img{
                width: 30vw;
            }

            p{
                font-size: 0.5rem;
            }

            h5{
                font-size: 1rem;
            }

            li{
                font-size: 1rem;
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.98px){
        div{
            img{
                width: 30vw;
            }

            p{
                font-size: 0.7rem;
            }

            h5{
                font-size: 1.5rem;
            }

            li{
                font-size: 1.5rem;
            }
        }
    }
`