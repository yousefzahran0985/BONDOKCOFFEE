import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MyProvider } from './context/MyProduts.jsx'
import ScrollTop from "./components/other/ScrollToTop";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollTop />
        <MyProvider>
          <ToastContainer style={{ top: "100px" }}/>
          <App />
        </MyProvider>
    </BrowserRouter>
  </StrictMode>,
)
