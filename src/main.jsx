import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer, toast } from 'react-toastify';
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import routes from './Routes/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      
    />
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
