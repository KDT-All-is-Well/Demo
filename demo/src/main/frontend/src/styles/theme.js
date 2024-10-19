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
            gray: '#5A5A5A'
        }
    },
    typography: {
        fontFamily: '"Nunito Sans", sans-serif',
        h1: {
            fontSize: 'clamp(16px, 7vw, 40px)',
            fontWeight: 700,
            color: '#464646',
        },
        body1: {
            fontSize: 'clamp(12px, 1vw, 20px)',
            fontWeight: 500,
        },
        body2: {
            fontSize: 'clamp(12px, 1vw, 20px)',
            fontWeight: 500,
            color: '#5A5A5A'
        },
        body3: {
            fontSize: 'clamp(14px, 2vw, 24px)',
            fontWeight: 700,
            color: '#5A5A5A'
        },
    },
});

export default theme;