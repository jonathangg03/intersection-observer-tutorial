import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import './index.css'

// 1. Import `createTheme`

// 2. Call `createTheme` and pass your custom values
const myDarkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      background: '#1d1d1d',
      text: '#fff',
      // you can also create your own color
      myDarkColor: '#ff4ecd'
      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

ReactDOM.render(
  <NextUIProvider theme={myDarkTheme}>
    <App />
  </NextUIProvider>,
  document.getElementById('root')
)
