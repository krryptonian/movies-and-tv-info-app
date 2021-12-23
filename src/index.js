import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import './assets/css/index.css'
import Routes from './Routes'

render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
