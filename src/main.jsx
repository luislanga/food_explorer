import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/global'
import { App } from './pages/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <App />
    </ThemeProvider>,
)
