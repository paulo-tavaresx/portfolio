import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './pages/Homepage/index.tsx'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  :root{
    --main-color:grey;
    --secondary-color:lightblue;
    --header-color: orange;
    --main-font-color:black;
    --emphasis-color:grey;
  }
  body {
    min-height: 100vh;
    color:var(--main-font-color)
  }

  html {
    scroll-behavior: smooth;
    font-size:62.5%;
  }

`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Homepage />
    <GlobalStyle />
  </React.StrictMode>
)
