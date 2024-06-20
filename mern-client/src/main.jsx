import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {AuthProvider} from './contects/authProvider'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
// TRANK STACK 
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    </AuthProvider>
     
  </React.StrictMode>,
)
