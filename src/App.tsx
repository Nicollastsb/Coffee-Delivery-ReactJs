import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./Styles/Themes/default";
import { GlobalStyle } from "./Styles/global";
import { Router } from './Components/Router';
import { BrowserRouter } from 'react-router-dom'
import { SaleProvider } from './Components/Contexts/SaleProvider';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <SaleProvider>
          <Router/>
        </SaleProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
