import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
