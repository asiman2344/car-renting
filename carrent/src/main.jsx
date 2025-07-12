import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '../routes/router.jsx'
import App from './App.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
