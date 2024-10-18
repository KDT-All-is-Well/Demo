import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import theme from './styles/theme.js';


function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Outlet />
            </Container>
        </ThemeProvider>
    );
}

export default App;