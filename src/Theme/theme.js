
import { createTheme, } from '@mui/material/styles'

const Colors = {
    primary: '#8FC27D',
    secondary: '#E9FFE1',
    black: '#000000',
    gray: '#7C7C7C',
    white: '#FFFFFF',
    yellow: '#F8B84E',
};

const theme = createTheme({
    palette: {
        primary: {

            main: Colors.primary,
            black: Colors.black,
            white: Colors.white,

        },
        secondary: {
            main: Colors.secondary,

        },
        cusWhite: {
            main: Colors.white,
        },
        cusBlack: {
            main: Colors.black
        }

    },
    typography: {
        fontFamily: [
            '"Poppins"', 'sans-serif'

        ].join(",")
    },
    // breakpoints: {
    //     values: {
    //         // mobile: 0,
    //         // tablet: 768,
    //         // laptop: 1024,
    //         // desktop: 1200
    //     }
    // },
});


export default theme