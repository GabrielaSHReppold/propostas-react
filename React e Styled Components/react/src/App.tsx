import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './configs/Global/GlobalStyles';
import { AppRoutes } from './configs/routes/AppRoutes';
import { theme } from '../src/configs/Global/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;



