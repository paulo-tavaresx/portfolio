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
    --main-light-color:  #D9D9D9;
    --main-dark-color:#595959;
    --secondary-color: #B784D9;
    --shadow-opacity:0.3;
     --font-light-color:#000000;
     --font-dark-color:#D9D9D9;
  }
  body {
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    color:var(--font-light-color);
    background-color: var(--main-light-color);
  }
  body.darkmode {
    background-color: var(--main-dark-color);
    color:var(--font-dark-color);
  }

  body.darkmode {
    background-color: var(--main-dark-color);
    color:var(--font-dark-color);
  }

  body div  .mobileIcon.active{
    background-color: transparent;
  }
  body.darkmode  .mobileIcon{
    background-color: var(--font-dark-color);
    &::before,&::after{
      background-color: var(--font-dark-color);
    }
  }

  body .mobileIcon{
    background-color: var(--font-light-color);
    &::before,&::after{
      background-color: var(--font-light-color);
    }
  }
  #root{
    background-color:inherit;
    color:inherit;
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
