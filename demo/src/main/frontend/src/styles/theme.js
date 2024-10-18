import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    minWidth: '360px',
                    maxWidth: '1280px',
                    minHeight: '740px',
                    margin: '0 auto',
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#302723',
        },
        secondary: {
            main: '#FAE100',
        },
        background: {
            default: '#FFFFFF',
        },
        text: {
            main: '#464646',
            white: '#FFFFFF',
        }
    },
    typography: {
        fontFamily: '"Nunito Sans", sans-serif',
        h1: {
            fontSize: 'clamp(12px, 7vw, 40px)',
            fontWeight: 700,
            color: '#464646',
        },
        body1: {
            fontSize: 'clamp(12px, 1vw, 40px)',
            fontWeight: 400,
        },
    },
});

export default theme;