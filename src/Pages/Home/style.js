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
            font-weight: 900;
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
        width: 50vw;
    }
    
    figcaption{
        font-family: 'Lato';
        font-size: 1.5rem;
        display: flex;
        position: absolute;
        left: 15%;
        bottom: 0;
        #caption__stick{
            margin-left: 1rem;
        }
    }
`

