import { createGlobalStyle} from 'styled-components'
import Lato from './Lato/Lato-Regular.ttf'
import Cinzel from './Cinzel_Decorative/CinzelDecorative-Regular.ttf'


export default createGlobalStyle`
    @font-face{
        font-family: 'Lato';
        src: url(${Lato}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
    }

    @font-face{
        font-family: 'Cinzel';
        src: url(${Cinzel}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
    }

    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
    }

    html{
        font-size: 62.5%;
        font-family: 'Lato', sans-serif;
    }

    body{
        font-size: 2rem;
        font-family: 'Lato', sans-serif;
    }

    h1{
        font-family: '';
        text-transform: lowercase;
        font-weight: 800;
    }

    a{
        text-decoration: none;
        font-weight: 800;
    }
`