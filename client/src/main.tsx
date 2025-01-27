import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { LoadingProvider } from './context/loading.tsx';








ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <LoadingProvider>
      
        <App />
   

    </LoadingProvider>
    
    </BrowserRouter>
  </React.StrictMode>,
  // <RouterProvider router={routers}/>
)
