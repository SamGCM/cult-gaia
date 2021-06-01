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
`
