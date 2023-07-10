import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TextApp } from './components/texts/TextApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <TextApp />
    </>
  </React.StrictMode>,
)
