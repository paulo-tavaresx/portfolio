import React from 'react'
import ReactDOM from 'react-dom/client'
import { Homepage } from './pages/Homepage/index.tsx'
import 'devicon/devicon.min.css'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  :root{
    --main-color:  #D9D9D9;
    --secondary-color: #8F60BF;
    --header-color:  #B784D9;
    --main-font-color:black;
    --emphasis-color:#B784D9;
    --shadow-opacity:0.3;
    --cards-background-color: #D9D9D9;
    --font-light-color:#000000
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
