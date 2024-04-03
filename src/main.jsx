"use client";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './responsive.css'
import './appresponsive.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
