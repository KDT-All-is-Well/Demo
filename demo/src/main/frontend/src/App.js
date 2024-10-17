import { Outlet } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle, styled } from 'styled-components';
import theme from './styles/theme';


const GlobalStyle = createGlobalStyle`
    body {
      min-width: 360px;
      max-width: 1280px;
      min-height: 740px;
      margin: 0 auto;
    }
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <>
                <Outlet />
            </>
        </ThemeProvider>
    );
}

export default App;