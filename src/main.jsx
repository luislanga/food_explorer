import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/global'
import { AuthProvider } from './hooks/auth'
import { Routes } from './routes'
import { CartProvider } from './hooks/cart'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CartProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </CartProvider>

    </ThemeProvider>,
)
